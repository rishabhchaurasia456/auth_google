import React from 'react'
import { GoogleLogin } from 'react-google-login';

const clientId = "691247830540-6361hkkkf07ms8meubksdu4d73kijt1d.apps.googleusercontent.com";

const Login = () => {
    
    const onSuccess = (res) =>{
        console.log("LOGIN SUCCESS! Current User: ", res.profileObj);
    }

    const onFailure = (res) =>{
        console.log("LOGIN SUCCESS! res: ", res);
    }

  return (
    <div id="signInButton">
        <GoogleLogin
            clientId={clientId}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'Single_host_origin'}
            isSignedIn={true}
        />
    </div>
  )
}

export default Login