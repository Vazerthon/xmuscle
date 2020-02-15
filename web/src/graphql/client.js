import ApolloClient from 'apollo-boost';

import settings from '../settings';

export default new ApolloClient({
  uri: settings.apiAddress,
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : undefined,
      },
    });
  },
});
