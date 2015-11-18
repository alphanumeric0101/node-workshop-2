var http = require('http');
var request = require('request');

var requestListener = function (req, response) {
  
  var userWord = req.url.substring(1);
  
  //console.log(userWord);
  
  request('http://words.bighugelabs.com/api/2/88cba4b09554adf72ae66273c999de61/' + userWord +'/json', function(err, res, body){
      if (err) {
        response.writeHead(200);
        response.end('Sorry, try again! There was an error:' + err);           
      }
      else {
            response.writeHead(200);
            response.end(body);           
      }
  });
};

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);