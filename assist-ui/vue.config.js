module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/scss/colors.scss";`,
      },
    },
  },
};
