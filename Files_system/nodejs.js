var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('Files_system/demofile1.html', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// http://localhost:8080
