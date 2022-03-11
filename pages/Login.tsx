import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { Dispatch, SetStateAction, useState } from 'react';
import { authorizeUser, AuthorizeResponse, authorizePath, AuthorizeRequest } from '../pages/api/user/authorize.config'
import { NJS_AUTH_COOKIE } from "../client.config.json"
import useSWR from 'swr'
import axios, { AxiosResponse } from 'axios'
import Form from '../Components/Generic/Form'
import { Box } from '@mui/system';
import { Input, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from 'next/link'
import { _required_ } from './api/app.validation';
import { default_string } from '../shared/consts';
import { handleString } from '../lib/Validate';
interface LoginProps extends ISharedProps {

}



const Login: NextPage<LoginProps> = (props: LoginProps) => {

  const [username, setUsername] = useState<NextInput<string>>({
    ValidationFunctions: [_required_],
    Value: default_string,
    Name: "Username"
  })

  const [password, setPassword] = useState<NextInput<string>>({
    ValidationFunctions: [_required_],
    Value: default_string,
    Name: "Password"
  })

  const [loading, setLoading] = useState<boolean | undefined>(false);
  async function login() {
    try {
      const response = await axios.post<any, AxiosResponse<APIResponse<AuthorizeResponse>>, AuthorizeRequest>(authorizePath, {
        username: username.Value,
        password: password.Value
      });
      console.log(response);
      if (response.data.data){
        localStorage.setItem("AUTHORIZATION", response.data.data.token);
        props.setSharedProps<Dispatch<SetStateAction<SharedProps>>>({
          ...props.sharedProps, auth: {
            token: response.data.data.token,
            authorized: true,
          } as AuthState,
          stateReady: true
        })
      }else{
        
      }
     
    } catch (error) {
        
    }
  }
  return (
    <Box sx={{}}>
      <Form>
        <Input
          placeholder={"Username"}
          type={"username"}
          value={username.Value}
          error={username.IsValid}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleString(event, username, setUsername)} />


        <Input
          placeholder={"Password"}
          type={"password"}
          value={password.Value}
          error={password.IsValid}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleString(event, password, setPassword)} />

        <LoadingButton
          color="primary"
          onClick={login}
          loading={loading}
          variant="contained"
          type={"submit"}
        >
          Login
        </LoadingButton>
      </Form>


      <Link href={"/Register"}>
        <a>Register</a>
      </Link>
    </Box>
  )
}

export default Login
