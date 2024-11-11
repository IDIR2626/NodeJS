var http = require('http');
var dt = require('./myfirstmodule');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
      /*
  The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
  This object has a property called "url" which holds the part of the url that comes after the domain name:
  
  */
    res.write(req.url); //http://localhost:8080/summer -> ill return /summer
    res.end("\n I am HOCINE mohand ouidir");
  }).listen(8080); // the server object listens on port 8080 and returns date and time and a message for the client who tries to connect to this port.
  

