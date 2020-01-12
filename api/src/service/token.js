import { OAuth2Client } from 'google-auth-library';

const { GOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } = process.env;

// TODO is client thread safe?
const client = new OAuth2Client(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI,
);

const getAccessToken = code => {
  const getAccessTokenFromResponse = response => response.tokens.access_token;

  return client
    .getToken(code)
    .then(getAccessTokenFromResponse);
};

const getAccessTokenInfo = token => client.getTokenInfo(token);

export default {
  getAccessToken,
  getAccessTokenInfo,
};
