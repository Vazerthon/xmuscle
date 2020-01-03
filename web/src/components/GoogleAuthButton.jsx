import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';

import settings from '../settings';
import AuthContext from '../context/auth';

export default function GoogleAuthButton() {
  const authContext = useContext(AuthContext);

  const responseGoogle = mode => response => {
    console.log(mode);
    console.log(response);

    console.log(authContext);
  };

  return (
    <GoogleLogin
      clientId={settings.googleClientId}
      buttonText="Login"
      onSuccess={responseGoogle('success')}
      onFailure={responseGoogle('failure')}
      cookiePolicy="single_host_origin"
    />
  );
}
