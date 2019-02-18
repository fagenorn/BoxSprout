module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_juice.scss";
          @import "~hover.css/scss/hover.scss";
          @import "@/styles/_bulma.scss";
        `
      }
    }
  }
};
