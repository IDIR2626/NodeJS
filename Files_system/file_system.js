var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('Files_system/file_system_demofile.html', function(err, data) {
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

// create a ne wfile using the appendFile() method
// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
fs.appendFile('Files_system/mynewfile1.txt', 'Hello content!', function (err){
  if (err) throw err;
  //the throw statement throws (generates) an error. When an error occurs, JavaScript will normally stop and generate an error message. The technical term for this is: JavaScript will throw an exception (throw an error).
  console.log('Saved!');
})


