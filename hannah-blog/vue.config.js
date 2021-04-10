const configureAPI = require('./src/api/server/configure')

module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    before: configureAPI
  }
};
