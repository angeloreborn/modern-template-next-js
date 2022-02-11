import '../styles/globals.css'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import useSWR, { Arguments } from 'swr'


const originGetWithHeaders = (headers: Headers) => fetch(
  {
    mode: "same-origin",
    method: "GET",
    headers: headers
  } as RequestInfo).then((res) => res.json())

async function MyApp({ Component, pageProps }: AppProps<Session>) {
  /**
   * session state
   *  Manages the session of the application
   *  
   */
  const headers = new Headers();

  const { data, error } = useSWR('/api/user', await originGetWithHeaders(headers))

  const [session, setSession] = useState<Session>();

  useEffect(()=>{
    
  },[])


  return <Component {...pageProps} session = {session} setSession = {setSession} />
}

export default MyApp
