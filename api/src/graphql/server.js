import { ApolloServer } from 'apollo-server';
import glue from 'schemaglue';

import services from '../service/index';

export default () => {
  const options = { js: '**/*.js' };

  const { schema, resolver } = glue('./', options);

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolver,
    context: async ({ req }) => {
      const bearer = req.headers.authorization || '';
      const user = bearer ? await services.auth.getUserFromBearerToken(bearer) : null;

      return {
        services,
        user,
      };
    },
  });

  server.listen().then(({ url }) => {
    // eslint-disable-next-line no-console
    console.log(`🚀 GraphQL server ready at ${url}`);
  });
};
