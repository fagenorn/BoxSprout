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
  }
};
