import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import { useMutation } from '@apollo/react-hooks';

import REGISTER from '../graphql/mutations/register';

import settings from '../settings';

export default function GoogleAuthButton({ onSuccess, onFailure }) {
  const [mutation] = useMutation(REGISTER);

  const handleSuccess = ({ code }) => {
    mutation({ variables: { code } }).then(onSuccess);
  };

  return (
    <GoogleLogin
      clientId={settings.googleClientId}
      buttonText="Login / Register"
      onSuccess={handleSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      accessType="offline"
      responseType="code"
      theme="dark"
    />
  );
}

GoogleAuthButton.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};
