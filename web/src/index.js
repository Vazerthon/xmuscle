import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { ApolloProvider } from '@apollo/react-hooks';

import theme from './theme';
import { AuthContextProvider } from './context/auth';
import apolloClient from './graphql/client';
import history from './history';

import registerServiceWorker from './registerServiceWorker';
import App from './components/app';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Router>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
/* eslint-enable react/jsx-filename-extension */

registerServiceWorker();
