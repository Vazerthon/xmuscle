import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import { useMutation } from '@apollo/react-hooks';

import LOGIN from '../graphql/mutations/login';
import REGISTER from '../graphql/mutations/register';

import settings from '../settings';

export default function GoogleAuthButton({ mode, onSuccess, onFailure }) {
  const [mutation] = useMutation(
    {
      login: LOGIN,
      register: REGISTER,
    }[mode],
  );

  const handleSuccess = ({ code }) => {
    mutation({ variables: { code } }).then(onSuccess);
  };

  return (
    <GoogleLogin
      clientId={settings.googleClientId}
      buttonText={mode}
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
  mode: PropTypes.oneOf(['login', 'register']).isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};
