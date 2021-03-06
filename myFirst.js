var http = require('http');
var url = require('url');
var filesystem = require('fs');
var dt = require('./myFirstModule.js');

http.createServer(function (req, res){
	filesystem.writeFile('newFile.txt', 'Hello from NodeJS', (error) => {
		if(error)
			throw error;
		console.log('Saved!');
	});

	filesystem.readFile('template.html', (error, data) => {
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write("The current date is: " + dt.myDateTime());
		res.write("<hr>");
		// Enter http://localhost:8080/?year=2020&month=June
		var q = url.parse(req.url, true).query;
		var text = q.year + " " + q.month;
		res.write(text);
		res.write("<hr>");
		res.write(data)
	});

	filesystem.readFile('newFile.txt', (error, data) => {
		res.write("<hr>");
		res.write(data);
		return res.end();
	});
}).listen(8080);
