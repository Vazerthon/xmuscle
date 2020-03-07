import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import paths from './paths';
import AuthContext from './context/Auth';

import SiteContainer from './components/primitives/layout/SiteContainer';
import Login from './pages/Login';
import Home from './pages/Home';

export default function App() {
  const authContext = useContext(AuthContext);

  const onLoginPage = paths.current === paths.pages.login;
  if (!authContext.isAuthenticated && !onLoginPage) {
    paths.goTo(paths.pages.login);
  }

  return (
    <SiteContainer>
      <Switch>
        <Route path={paths.pages.login} exact render={() => <Login />} />
        <Route path={paths.pages.home} exact render={() => <Home />} />
      </Switch>
    </SiteContainer>
  );
}
