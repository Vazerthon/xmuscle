import history from './history';

const goTo = path => history.push(path);
const current = history.location.pathname;

export default {
  pages: {
    home: '/',
    login: '/login',
  },
  goTo,
  current,
};
