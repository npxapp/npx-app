export const Javascript = {
  "9999999999": {
    title: 'JavaScript',
    language: 'javascript',
    code: `
    devServer: {
      port: '5000',
      host: '0.0.0.0',
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'public'),
      },
      open: true,
      hot: true,
      liveReload: true,
      allowedHosts: ['localhost', '.freemyip.com'],
    }
    `
  }
};