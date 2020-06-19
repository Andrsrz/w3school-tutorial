var http = require('http');
var url = require('url');
var dt = require('./myFirstModule.js');

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write("The current date is: " + dt.myDateTime());
	res.write("<hr>");
	// Enter http://localhost:8080/?year=2020&month=June
	var q = url.parse(req.url, true).query;
	var text = q.year + " " + q.month;
	res.end(text);
}).listen(8080);
