import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import { useMutation } from '@apollo/react-hooks';

import REGISTER from '../graphql/mutations/register';
import settings from '../settings';
import Button from './primitives/form/Button';

export default function GoogleAuthButton({ onSuccess, onFailure }) {
  const [mutation] = useMutation(REGISTER);

  const handleSuccess = ({ code }) => {
    mutation({ variables: { code } }).then(onSuccess);
  };

  return (
    <GoogleLogin
      clientId={settings.googleClientId}
      onSuccess={handleSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      accessType="offline"
      responseType="code"
      render={({ onClick }) => <Button size="lg" onClick={onClick}>Login / Register</Button>}
    />
  );
}

GoogleAuthButton.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};
