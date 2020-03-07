import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import { useMutation } from '@apollo/react-hooks';

import REGISTER from '../graphql/mutations/register';
import settings from '../settings';
import Icon from './primitives/Icon';
import CentreCentre from './primitives/layout/CentreCentre';
import Button from './primitives/form/Button';

export default function GoogleAuthButton({ onSuccess, onFailure }) {
  const [mutation] = useMutation(REGISTER);

  const handleSuccess = ({ code }) => {
    mutation({ variables: { code } })
      .then(onSuccess)
      .catch(onFailure);
  };

  return (
    <GoogleLogin
      clientId={settings.googleClientId}
      onSuccess={handleSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      accessType="offline"
      responseType="code"
      render={({ onClick }) => (
        <Button size="lg" onClick={onClick}>
          <CentreCentre>
            <Icon icon="google" colour="highlight" />
            Login / Register
          </CentreCentre>
        </Button>
      )}
    />
  );
}

GoogleAuthButton.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};
