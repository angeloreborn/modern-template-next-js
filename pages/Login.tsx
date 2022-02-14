import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link'
import Authorize from '../Components/Security/Authorize';


interface LoginProps extends ISharedProps{

}

const Login: NextPage<LoginProps> = (props: LoginProps) => {
  
  function login(){
    // set auth token
    // set application state
    localStorage.setItem("AUTHORIZATION2", "token");

    props.setSharedProps<Dispatch<SetStateAction<SharedProps>>>({
      ...props.sharedProps, auth: {
          token: "token",
          authorized: true,
      } as AuthState,
      stateReady: true
  })
  }

  
  return (
    <div>     
      safawfs
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
