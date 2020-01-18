import Boom from '@hapi/boom';
import { compose, prop } from 'ramda';
import tokenService from './token';
import dataQuery from '../data/queries';

const readUserId = prop('sub');

const throwFailedLoginError = () => {
  throw Boom.unauthorized('Error loging in. Please try again');
};

const addTokenInfo = accessToken => tokenService
  .getAccessTokenInfo(accessToken).then(info => ({ accessToken, info }));

const getTokenInfoFromCode = code => tokenService
  .getAccessToken(code)
  .then(addTokenInfo);

const getUserFromAuthId = compose(dataQuery.user.byAuthProviderId, readUserId);

const login = async (code) => {
  const { accessToken, info } = await getTokenInfoFromCode(code);
  return getUserFromAuthId(info)
    .then(user => (user ? { accessToken } : throwFailedLoginError()))
    .catch(throwFailedLoginError);
};

export default {
  login,
};
