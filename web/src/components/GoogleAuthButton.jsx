import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useMutation } from '@apollo/react-hooks';

import LOGIN from '../graphql/mutations/login';
import settings from '../settings';
import paths from '../paths';
import AuthContext from '../context/auth';

export default function GoogleAuthButton() {
  const authContext = useContext(AuthContext);
  const [loginMutation] = useMutation(LOGIN);

  if (authContext.isAuthenticated) {
    paths.goTo(paths.pages.home);
  }

  const handleSuccess = ({ code }) => {
    loginMutation({ variables: { code } })
      .then(console.log);

    // paths.goTo(paths.pages.home);
  };

  const handleFailure = () => {};

  return (
    <GoogleLogin
      clientId={settings.googleClientId}
      buttonText="Login"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy="single_host_origin"
      accessType="offline"
      responseType="code"
      theme="dark"
    />
  );
}
