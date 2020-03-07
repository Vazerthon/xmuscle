import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const context = {
  getAuthToken: () => localStorage.getItem('token'),
  setAuthToken: value => localStorage.setItem('token', value),
  getUserId: () => localStorage.getItem('userId'),
  setUserId: value => localStorage.setItem('userId', value),
  isAuthenticated: !!localStorage.getItem('token'),
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
