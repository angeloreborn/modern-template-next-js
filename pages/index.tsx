import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Link from 'next/link'
import Authorize from '../Components/Security/Authorize'

interface HomeProps extends ISharedProps{

}
const Home: NextPage<HomeProps> = (props: HomeProps) => {

  return (
 
    <div>Index</div>

  )
}

export default Home

export async function getServerSideProps(context: GetServerSideProps) {
  return {
    props: {}, // will be passed to the page component as props
  }
} 

