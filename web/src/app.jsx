import React, { useContext } from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import history from './history';
import AuthContext from './context/auth';
import paths from './paths';

import Login from './components/pages/Login';
import Home from './components/pages/Home';

export default function App() {
  const authContext = useContext(AuthContext);

  const onLoginPage = paths.current === paths.pages.login;
  if (!authContext.isAuthenticated && !onLoginPage) {
    paths.goTo(paths.pages.login);
  }

  return (
    <Router history={history}>
      <Switch>
        <Route path={paths.pages.login} exact render={Login} />
        <Route path={paths.pages.home} exact render={Home} />
      </Switch>
    </Router>
  );
}
