/*
Now we know how to parse the query string, and in the previous chapter we learned how to make Node.js behave as a file server.
Let us combine the two, and serve the file requested by the client.
*/


/*
create a file server that opens the requested file and returns the content to the client.
If anything goes wrong, throw a 404 error.
*/



var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Current working directory:", process.cwd());

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "4-File_Server" + q.pathname;

    fs.readFile(filename, function(err, data) {
        if (err) {
            throw err;
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

// http://localhost:8080/summer.html
// http://localhost:8080/winter.html