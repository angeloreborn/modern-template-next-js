import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { Dispatch, SetStateAction, useState } from 'react';
import { NJS_AUTH_COOKIE } from "../client.config.json"
import useSWR from 'swr'
import axios, { AxiosResponse } from 'axios'
import Form from '../Components/Generic/Form'
import { Box } from '@mui/system';
import { Input, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { registerPath, RegisterRequest, RegisterResponse } from './api/user/register.config';

interface RegisterProps extends ISharedProps {

}



const Login: NextPage<RegisterProps> = (props: RegisterProps) => {
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [confirmPassword, setConfirmPassword] = useState<string>()
  const [loading, setLoading] = useState<boolean | undefined>(false);
  async function register() {
    try {
      const response = await axios.post<any, AxiosResponse<RegisterResponse>, RegisterRequest>(registerPath, {
        username: username,
        password: password,
        confirmedPassword: confirmPassword
      });
      console.log(response);

    } catch (error) {

    }



  }
  return (
    <Box sx={{}}>
      <Form>
        <Input placeholder={"Username"} type={"username"} />
        <Input placeholder={"Password"} type={"password"} />
        <Input placeholder={"Confirm Password"} type={"password"} />
        <LoadingButton
          color="primary"
          onClick={register}
          loading={loading}
          type={"submit"}
        >
          Register
        </LoadingButton>
      </Form>

    </Box>
  )
}



export default Login
