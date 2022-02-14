import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState, useEffect} from 'react'
import Login from './Login';
function MyApp({ Component, pageProps }: AppProps<Session>) {
  const [state, setState] = useState<ISharedProps>();
  return <Component {...pageProps} sharedProps={state} setSharedProps={setState}/>
}

export default MyApp
