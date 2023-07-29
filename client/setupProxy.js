const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://localshop-uv9i.onrender.com',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware(proxy)
  );
};
