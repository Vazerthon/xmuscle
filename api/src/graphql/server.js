import { ApolloServer } from 'apollo-server';
import glue from 'schemaglue';

import services from '../service/index';

export default () => {
  const options = { js: '**/*.js' };

  const { schema, resolver } = glue('./', options);

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolver,
    context: () => ({
      services,
    }),
  });

  server.listen().then(({ url }) => {
    // eslint-disable-next-line no-console
    console.log(`🚀 GraphQL server ready at ${url}`);
  });
};
