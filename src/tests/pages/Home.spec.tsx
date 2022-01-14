import  { render, screen  } from '@testing-library/react'
import Home from '../../pages'

jest.mock('next-auth/client', () => {
  return{
    useSession: () => [null, false]
  }
})
jest.mock('next/router')

describe('Home page', () => {
  it('renders correctly', () => {

    render(
    <Home product={{amount: 'R$10,00', priceId: 'fake-price-id'}}/>
    )
    expect(screen.getByText("for R$10,00 month")).toBeInTheDocument()
  })
})