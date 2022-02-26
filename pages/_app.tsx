import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState} from 'react'

function MyApp({ Component, pageProps }: AppProps<ISession>) {
  const [state, setState] = useState<ISharedProps>();
  return <Component {...pageProps} sharedProps={state} setSharedProps={setState}/>
}

export default MyApp
