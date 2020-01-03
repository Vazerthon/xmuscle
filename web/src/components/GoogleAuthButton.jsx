import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';

import settings from '../settings';
import paths from '../paths';
import AuthContext from '../context/auth';

export default function GoogleAuthButton() {
  const authContext = useContext(AuthContext);

  if (authContext.isAuthenticated) {
    paths.goTo(paths.pages.home);
  }

  const handleSuccess = response => {
    // const email = response.w3.U3;
    const { accessToken } = response;
    authContext.setAuthToken(accessToken);
    paths.goTo(paths.pages.home);
  };

  const handleFailure = () => {};

  return (
    <GoogleLogin
      clientId={settings.googleClientId}
      buttonText="Login"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy="single_host_origin"
    />
  );
}
