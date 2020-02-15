import Boom from '@hapi/boom';
import { compose, prop } from 'ramda';
import tokenService from './token';
import dataQuery from '../data/queries';
import dataMutation from '../data/mutations';

const readUserId = prop('sub');

const throwFailedLoginError = () => {
  throw Boom.unauthorized('Error loging in. Please try again');
};

const addTokenInfo = accessToken => tokenService.getAccessTokenInfo(accessToken)
  .then(info => ({ accessToken, info }));

const getTokenInfoFromCode = code => tokenService.getAccessToken(code).then(addTokenInfo);

const getUserFromAuthId = compose(dataQuery.user.byAuthProviderId, readUserId);
const registerNewUser = compose(dataMutation.user.register, readUserId);

const register = async code => {
  const { accessToken, info } = await getTokenInfoFromCode(code);

  const registerUser = () => registerNewUser(info).then(({ id }) => ({ accessToken, id }));

  const returnAuthDetailsOrRegister = user => (user
    ? { accessToken, id: user.id }
    : registerUser());

  return getUserFromAuthId(info)
    .then(returnAuthDetailsOrRegister)
    .catch(throwFailedLoginError);
};

const getUserFromBearerToken = bearer => {
  const token = bearer.replace('Bearer ', '');
  return tokenService.getAccessTokenInfo(token)
    .then(getUserFromAuthId)
    .catch(() => null);
};

export default {
  register,
  getUserFromBearerToken,
};
