import React from 'react'
import Login from './Login';
import Register from './Register';

interface AuthenticateProps extends ISharedProps{

}
export default function Authentication(props: AuthenticateProps) {
  document.cookie = "big dickus 3000";
  return (
    <div>Authentication</div>
  )
}
 
