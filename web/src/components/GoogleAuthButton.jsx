import React from 'react';
import { GoogleLogin } from 'react-google-login';

import settings from '../settings';

export default function GoogleAuthButton() {

  const responseGoogle = mode => response => {
    console.log(mode);
    console.log(response);
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
