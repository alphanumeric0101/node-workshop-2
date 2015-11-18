var http = require('http');
//var request = require('request');

function requestListener(req, response) {

  var start = new Date().getTime();
    
    while (new Date().getTime() - start < 10000)
    
    response.end('Hello there!');
  }

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);