import '../styles/globals.css'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import useSWR, {SWRResponse} from 'swr'
import { getSession, getSessionPath} from '../lib/api/session'

/**
 * session state
 *  Manages the session of the application
 *  @summary ok
 */
function MyApp({ Component, pageProps }: AppProps<Session>) {

  const { data , error } = useSWR(getSessionPath, (url : any) => getSession(url))

  const [session, setSession] = useState<Session>();

  useEffect(() => {

  }, [])

  if (error) return <div>failed to load {error.toString()}</div>
  if (!data) return <div>loading...</div>
  return <Component {...pageProps} session={session} setSession={setSession} />
}

export default MyApp
