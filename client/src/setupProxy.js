const { createProxyMiddleware } = require("http-proxy-middleware");
const api_url = process.env.REACT_APP_API_URL;

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: api_url,
      changeOrigin: true,
    })
  );
};
