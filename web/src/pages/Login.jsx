import React, { useContext, useState } from 'react';
import GoogleAuthButton from '../components/GoogleAuthButton';

import paths from '../paths';
import AuthContext from '../context/Auth';

export default function Home() {
  const authContext = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const nagivateToHomePage = () => paths.goTo(paths.pages.home);

  if (authContext.isAuthenticated) {
    nagivateToHomePage();
  }

  const handleSuccess = ({ data }) => {
    const { accessToken, id } = data.register;
    authContext.setAuthToken(accessToken);
    authContext.setUserId(id);
    nagivateToHomePage();
  };

  const makeFailureHandler = message => () => setErrorMessage(message);

  return (
    <>
      <GoogleAuthButton
        onSuccess={handleSuccess}
        onFailure={makeFailureHandler(
          'Sorry, something went wrong, please try again',
        )}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </>
  );
}
