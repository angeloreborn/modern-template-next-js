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

