const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_juice.scss";
          @import "@/styles/_bulma.scss";
        `
      }
    }
  },
  configureWebpack:
    process.env.NODE_ENV === "production"
      ? {
          plugins: [
            new PrerenderSPAPlugin({
              staticDir: path.join(__dirname, "dist"),
              routes: ["/"]
            })
          ]
        }
      : undefined
};
