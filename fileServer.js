var http = require('http');
var url = require('url');
var filesystem = require('fs');

// Enter http://localhost:8080/summer.html
// Enter http://localhost:8080/winter.html

http.createServer((req, res) => {
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;

	filesystem.readFile(filename, (error, data) => {
		if(error){
			res.writeHead(200, { 'Content-Type': 'text/html' });
			return res.end("404 Not Found");
		}

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(data);
		return res.end();
	});
}).listen(8080);
