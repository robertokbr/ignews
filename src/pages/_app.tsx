import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/global.scss';
import { Header } from '../components/Header';
import { Provider as NextAuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header/>
      <Component {...pageProps} /> 
    </NextAuthProvider>
  )
}

export default MyApp
