import  { render, screen  } from '@testing-library/react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { mocked } from 'ts-jest/utils'
import Post, { getStaticProps } from '../../pages/posts/preview/[slug]'
import { getPrismicClient } from '../../services/prismic'

jest.mock('next/router')
jest.mock('next-auth/client')
jest.mock('../../services/prismic')

const post = 
  {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>Post excerpt</p>',
  updatedAt: 'March, 10',
  }

describe('Post preview page', () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])

    render(
    <Post post={post}/>
    )
    expect(screen.getByText("My New Post")).toBeInTheDocument()
    expect(screen.getByText("Post excerpt")).toBeInTheDocument()
    expect(screen.getByText("Wanna continue reading?")).toBeInTheDocument()
  })
  it('redirects user to full post when user is subscribed', async () => {
    const useSessionMocked = mocked(useSession)
    const useRouterMocked = mocked(useRouter)
    const pushMock = jest.fn()
    useSessionMocked.mockReturnValueOnce([{activeSubscription: 'fake-active-subscription'}, false] as any)

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(<Post post={post}/>)

    expect(pushMock).toHaveBeenCalledWith('/posts/my-new-post')
  })
  it('loads initial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient)
    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [{
            type: 'heading',
            text: 'My new post'
          }],
          content: [{
            type: 'paragraph', text: 'Post excerpt'
          }],
        },
        last_publication_date: '02-02-2020'
      })
    }as any)
    const response = await getStaticProps({params: {slug: 'my-new-post'}} as any )
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My new post',
            content: '<p>Post excerpt</p>',
            updatedAt: '02 de fevereiro de 2020'
          }
        }
      })
    )
  })
})