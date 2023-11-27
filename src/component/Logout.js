import React from 'react'
import { GoogleLogout } from 'react-google-login';

const clientId = "691247830540-6361hkkkf07ms8meubksdu4d73kijt1d.apps.googleusercontent.com";
// const SCOPES= "https://www.googleapis.com/auth/drive";

const Logout = () => {

    const onSuccess = () =>{
        console.log("Log out successfully")
    }
  return (
    <div id='signOutButton'>
        <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            // scope={SCOPES}
        />
    </div>
  )
}

export default Logout