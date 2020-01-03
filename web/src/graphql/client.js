import ApolloClient from 'apollo-boost';

import settings from '../settings';

export default new ApolloClient({
  uri: settings.apiAddress,
  request: operation => {
    const token = localStorage.getItem('token'); // TODO maybe put this key in settings
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});
