const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const path = require("path");

module.exports = {
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "@/styles/_juice.scss";
  //         @import "~hover.css/scss/hover.scss";
  //         @import "@/styles/_bulma.scss";
  //       `
  //     }
  //   }
  // },
  configureWebpack: {
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, "./../src/index.html"),
          path.join(__dirname, "./../**/*.vue"),
          path.join(__dirname, "./../src/**/*.js")
        ])
      })
    ]
  }
};
