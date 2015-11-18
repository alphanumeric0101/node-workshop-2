var http = require('http');
var fortune = require('./library/fortune.js');

//var request = require('request');

function requestListener(req, response) {
    
    response.end(fortune.getFortune());
  }

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);