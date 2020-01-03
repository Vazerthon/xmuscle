
const developmentSettings = {
  apiAddress: 'http://localhost:4000',
  googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
};

const productionSettings = {

};

const settingsKey = `${process.env.NODE_ENV}Settings`;

export default {
  developmentSettings,
  productionSettings,
}[settingsKey];
