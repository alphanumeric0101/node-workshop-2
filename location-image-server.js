var http = require('http');
var request = require('request');

var requestListener = function (req, response) {
  
  var userCity = req.url.substring(1);
  
  request('https://maps.googleapis.com/maps/api/geocode/json?address=' + userCity, function(err, res, body) {
      console.log(err, res, body);
      if (err) {
        response.writeHead(200);
        response.end('Sorry, try again! There was an error:' + err);           
      }
      else {
          var data = JSON.parse(body);
          var firstResult = data.results[0];
          
          if (firstResult) {
            var location = data.results[0].geometry.location;
            response.writeHead(200);
            response.end('<img src="https://placekitten.com/g/201/201" />')
            //response.end("<img src='http://maps.googleapis.com/maps/api/staticmap?center=43.653226,-79.3831843&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDdqjo8OHWLXd7QnQE0HtHPoAAHrFh3sPM' />");           
          }
          else {
            response.writeHead(200);
            response.end('Sorry there are no results');                         
          }
      }
  });
}

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);

// api key: AIzaSyDdqjo8OHWLXd7QnQE0HtHPoAAHrFh3sPM