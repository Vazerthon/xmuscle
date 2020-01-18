// eslint-disable-next-line import/prefer-default-export
export const resolver = {
  Mutation: {
    login: (_, { code }, { services }) => services.auth.login(code),
  },
};
