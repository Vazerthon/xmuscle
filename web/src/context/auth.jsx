import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const context = {
  isAuthenticated: !!localStorage.getItem('token'),
  getAuthToken: () => localStorage.getItem('token'),
  setAuthToken: () => localStorage.setItem('token'),
};

const AuthContext = createContext(context);

export function AuthContextProvider({ children }) {
  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
