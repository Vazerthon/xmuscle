// eslint-disable-next-line import/prefer-default-export
export const resolver = {
  Query: {
    test: (_, __, { services, user }) => {
      console.log(user);
      return {
        message: 'hi',
      };
    },
  },
};
