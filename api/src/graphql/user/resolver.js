// eslint-disable-next-line import/prefer-default-export
export const resolver = {
  Mutation: {
    login: (_, { code }, { services }) => services.token
      .getAccessToken(code)
      .then(accessToken => ({ accessToken }))
      .catch(() => { throw new Error('Error loging in. Please try again'); }),
  },
};
