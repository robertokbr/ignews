import { useMemo } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export function SingInButton() {
  const isUserLogged = useMemo(() => true, [])

  return isUserLogged ? (
    <button type="button" className={styles.siginInButton}>
      <FaGithub color="#04d361" />
      Robertokbr
      <FiX  className={styles.closeIcon} color="#737380" />
    </button>
  ) : (
    <button type="button" className={styles.siginInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}