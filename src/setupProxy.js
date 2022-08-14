const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/api/**', { target: 'https://syronahealth-clinicians-api.herokuapp.com/' }));
  app.use(createProxyMiddleware('/otherApi/**', { target: 'https://syronahealth-clinicians-api.herokuapp.com/' }));
};
