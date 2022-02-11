import type { GetServerSidePropsContext, NextPage } from 'next'
import Link from 'next/link'


interface HomeProps extends ISession{

}
const Home: NextPage<ISession> = (props: HomeProps) => {

  return (
    <div>     
      Not Hello
      <Link href={"/Test"}>
        <a>Helo</a>
      </Link>
  
    </div>
  )
}

export default Home

import {GetSession} from '../lib/backend/SessionManager'

export async function getServerSideProps(context : GetServerSidePropsContext) {
  let session = GetSession();
  console.log(session);
  return {
    props: {
      session: session
    }, // will be passed to the page component as props
  }
}


