const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://localshop-uv9i.onrender.com',
      changeOrigin: true,
    })
  );
};
