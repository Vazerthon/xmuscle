import React, { useContext, useState } from 'react';
import GoogleAuthButton from '../GoogleAuthButton';

import paths from '../../paths';
import AuthContext from '../../context/auth';

export default function Home() {
  const authContext = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const nagivateToHomePage = () => paths.goTo(paths.pages.home);

  if (authContext.isAuthenticated) {
    nagivateToHomePage();
  }

  const makeSuccessHandler = mode => ({ data }) => {
    const { accessToken, id } = data[mode];
    authContext.setAuthToken(accessToken);
    authContext.setUserId(id);
    nagivateToHomePage();
  };

  const makeFailureHandler = message => () => setErrorMessage(message);

  return (
    <>
      <GoogleAuthButton
        mode="login"
        onSuccess={makeSuccessHandler('login')}
        onFailure={makeFailureHandler(
          'Something went wrong while logging you in, please try again',
        )}
      />
      <GoogleAuthButton
        mode="register"
        onSuccess={makeSuccessHandler('register')}
        onFailure={makeFailureHandler(
          'Something went wrong while registering your account, please try again',
        )}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </>
  );
}
