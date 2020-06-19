var http = require('http');
var dt = require('./myFirstModule.js');

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write("The current date is: " + dt.myDateTime());
	res.end();
}).listen(8080);
