import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { Dispatch, SetStateAction, useState } from 'react';
import {authorizeUser, AuthorizeResponse, authorizePath, AuthorizeRequest} from '../pages/api/user/authorize.config'
import {NJS_AUTH_COOKIE} from "../client.config.json"
import useSWR from 'swr'
import axios, { AxiosResponse } from 'axios'
import Form from '../Components/Generic/Form'
import { Box } from '@mui/system';
import { Input, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

interface RegisterProps extends ISharedProps{

}



const Login: NextPage<RegisterProps> = (props: RegisterProps) => {
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [loading, setLoading] = useState<boolean | undefined>(false);
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
      
    }



  }
  return (
    <Box sx={{}}>     
        <Form>
            <Input placeholder={"Username"} type={"username"}/>
            <Input placeholder={"Password"} type={"password"}/>
            <Input placeholder={"Confirm Password"} type={"password"}/>
        </Form>
        <LoadingButton
        color="primary"
        onClick={login}
        loading={loading}
        variant="contained"
        >
          Login
        </LoadingButton>
    </Box>
  )
}

export default Login