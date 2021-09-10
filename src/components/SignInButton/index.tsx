import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
import { signIn, useSession, signOut } from 'next-auth/client' 

export function SingInButton() {
  const [sesssion] = useSession();

  return sesssion ? (
    <button 
      type="button" 
      className={styles.siginInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" />
      Robertokbr
      <FiX  className={styles.closeIcon} color="#737380" />
    </button>
  ) : (
    <button 
      onClick={() => signIn('github')}
      type="button" 
      className={styles.siginInButton}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}