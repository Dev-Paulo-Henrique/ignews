import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from '../SignInButton/styles.module.scss'
import { signIn, useSession } from 'next-auth/client'

export function SignInButton() {
  const [session] = useSession()

  return session ? (
    <button
    className={styles.signInButton}
    type="button"
    >
      <FaGithub color="#04d361"/>
      Paulo Henrique
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button
    className={styles.signInButton}
    type="button"
    onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417"/>
      Sign in with Github
    </button>
  )
}