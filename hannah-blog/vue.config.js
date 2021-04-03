const configureAPI = require('@/server/configure')

module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    before: configureAPI
  }
};
