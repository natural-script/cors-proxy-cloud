const cors_proxy = require('cors-anywhere');

var localAddress = '0.0.0.0' || 'localhost';
var port = process.env.PORT || 3000;

cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [],
  setHeaders: {
    "Access-Control-Expose-Headers": "Content-Length"
  },
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, localAddress, function () {});