// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/npx',
    createProxyMiddleware({
      target: 'http://localhost:3000/npx',
      changeOrigin: true,
    })
  );
};

