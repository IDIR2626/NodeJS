// The URL module splits up a web address into readable parts.
// To include the URL module like any other module in javascript, we use the require() method

var url = require('url');

// the url.parse() method takes a URL string, and returns a URL object
// the URL object has properties like host, hostname, search, query, etc.

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
// the true parameter allows to parse the query string to an object
console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?year=2017&month=february'

var qdata = q.query; // returns an object: { year: 2017, month: 'february'}
console.log(qdata.month); // returns 'february'