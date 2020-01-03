import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import { ApolloProvider } from '@apollo/react-hooks';

import registerServiceWorker from './registerServiceWorker';
import theme from './theme';
import apolloClient from './graphql/client';
import { AuthContextProvider } from './context/auth';
import App from './app';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
/* eslint-enable react/jsx-filename-extension */

registerServiceWorker();
