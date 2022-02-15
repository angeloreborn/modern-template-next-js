import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { Dispatch, SetStateAction, useState } from 'react';
import {authorizeUser, AuthorizeResponse, authorizePath, AuthorizeRequest} from '../pages/api/user/authorize.config'
import {NJS_AUTH_COOKIE} from "../client.config.json"
import useSWR from 'swr'
import axios, { AxiosResponse } from 'axios'
interface LoginProps extends ISharedProps{

}



const Login: NextPage<LoginProps> = (props: LoginProps) => {
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  async function login() {
    try {
      const response = await axios.post<any, AxiosResponse<AuthorizeResponse>, AuthorizeRequest>(authorizePath, {
        username: username,
        password: password
      });
      console.log(response);

      props.setSharedProps<Dispatch<SetStateAction<SharedProps>>>({
        ...props.sharedProps, auth: {
            token: response.data.token,
            authorized: true,
        } as AuthState,
        stateReady: true
    })
    } catch (error) {
      console.error(error);
    }



  }

  
  return (
    <div>     
      safawfs
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
