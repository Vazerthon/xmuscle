// eslint-disable-next-line import/prefer-default-export
export const resolver = {
  Mutation: {
    register: (_, { code }, { services }) => services.auth.register(code),
  },
};
