import '../styles/globals.css'
import type { AppProps } from 'next/app'

interface Session{
  
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
