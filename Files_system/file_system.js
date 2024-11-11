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
  console.log('mynewfile1.txt Saved!');
})

// create a new file using the open() method
// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created

fs.open('Files_system/mynewfile2.txt', 'w', function (err, file){
  if (err) throw err;
  console.log('mynewfile2.txt saved!');
})

// create a new, empty file using the writeFile() method
// the fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created

fs.writeFile('Files_system/mynewfile3.txt', 'Hello content!', function (err){
  if (err) throw err;
  console.log('mynewfile3.txt Saved!');
})


//############################################# UPDATE FILES ###############################################################

// the fs.appendFile() method appeends the specified content at the end of the specified file
// append "this is my text" to the end of the file "mynewfile1.txt"

fs.appendFile('Files_system/mynewfile1.txt', ' This is my text.', function (err){
  if (err) throw err;
  console.log('mynewfile1 Updated!')
});

// the fs.writeFile() method replaces the specified file and content

fs.writeFile('Files_system/mynewfile3.txt', 'This is my text', function (err){
  if (err) throw err;
  console.log('mynewfile3 Updated!');
})
