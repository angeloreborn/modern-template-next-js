import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { Dispatch, SetStateAction, useState } from 'react';
import { NJS_AUTH_COOKIE } from "../client.config.json"
import useSWR from 'swr'
import axios, { AxiosResponse } from 'axios'
import Form from '../Components/Generic/Form'
import { Box } from '@mui/system';
import { Input} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { registerPath, RegisterRequest, RegisterResponse } from './api/user/register.config';
import { _match_, _required_ } from './api/app.validation';
import { handleString } from '../lib/Validate';
import { default_string } from '../shared/consts';

interface RegisterProps extends ISharedProps {

}

const Login: NextPage<RegisterProps> = (props: RegisterProps) => {
  const [username, setUsername] = useState<NextInput<string>>({
    ValidationFunctions: [_required_],
    Value: default_string,
    Name: "Username"
  })
  const [email, setEmail] = useState<NextInput<string>>({
    ValidationFunctions: [_required_],
    Value: default_string,
    Name: "Email"
  })
  const [password, setPassword] = useState<NextInput<string>>({
    ValidationFunctions: [_required_],
    Value: default_string,
    Name: "Password"
  })
  const [confirmPassword, setConfirmPassword] = useState<NextInput<string>>({
    ValidationFunctions: [_required_, () => _match_(username.Value)],
    Value: default_string,
    Name: "Confirm Password"
  })

  const [loading, setLoading] = useState<boolean | undefined>(false);

  async function register() {
     setLoading(true);
     try {
       const response = await axios.post<any, AxiosResponse<RegisterResponse>, RegisterRequest>(registerPath, {
         username: username.Value,
         password: password.Value,
         email: email.Value,
         confirmedPassword: confirmPassword.Value
       });
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
          onChange={(event : React.ChangeEvent<HTMLInputElement>) => handleString(event, username, setUsername)}/>

        <Input 
          placeholder={"Email"} 
          type={"email"} 
          value={email.Value} 
          error={email.IsValid}
          onChange={(event : React.ChangeEvent<HTMLInputElement>) => handleString(event, email, setEmail)}/>

        <Input  
          placeholder={"Password"} 
          type={"password"} 
          value={password.Value} 
          error={password.IsValid}
          onChange={(event : React.ChangeEvent<HTMLInputElement>) => handleString(event, password, setPassword)} />


        <Input  
          placeholder={"Confirm Password"} 
          type={"password"} 
          value={confirmPassword.Value} 
          error={confirmPassword.IsValid}
          onChange={(event : React.ChangeEvent<HTMLInputElement>) => handleString(event, confirmPassword, setConfirmPassword)} />

        <LoadingButton
          color="primary"
          onClick={register}
          loading={loading}
          type={"submit"}>
          Register
        </LoadingButton>
      </Form>

    </Box>
  )
}



export default Login
