const path = require("path");

module.exports = {
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    }
  },

  chainWebpack: config => {
    config.module
      .rule("graphql")
      .test(/\.gql$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();

    config.plugin("define").tap(args => {
      args[0] = {
        VERSION: JSON.stringify(require("./package.json").version),
        ...args[0]
      };

      return args;
    });
  }
};
