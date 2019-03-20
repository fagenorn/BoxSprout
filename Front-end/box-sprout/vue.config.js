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

  pwa: {
    name: "BoxSprout",
    themeColor: "#889f43",
    msTileColor: "#6c5f3d",
    workboxOptions: {
      skipWaiting: true
    }
  },

  chainWebpack: config => {
    const imgRule = config.module.rule("images");
    imgRule
      .use("file-loader")
      .loader("image-webpack-loader")
      .tap(options => {
        const ret = options || {};
        ret.pngquant = {
          quality: "65-90",
          speed: 4
        };
        return ret;
      });
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    }
  }
};
