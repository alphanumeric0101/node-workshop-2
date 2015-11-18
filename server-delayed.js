var http = require('http');
//var request = require('request');

function requestListener(req, response) {
  setTimeout(function slowListen(){response.end('Hello there!');},10000);
  }

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);