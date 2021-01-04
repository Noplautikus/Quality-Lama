module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: 'Quality Lama',
        target: 'nsis',
        win: {
          icon: './public/logo.png',
        },
        nsis: {
          allowToChangeInstallationDirectory: true,
          oneClick: false,
          deleteAppDataOnUninstall: true,
        },
        publish: [
          {
            provider: 'github',
            owner: 'Noplautikus',
            repo: 'Quality-Lama',
            releaseType: 'draft',
          },
        ],
      },
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
