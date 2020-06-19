var http = require('http');
var filesystem = require('fs');
var formidable = require('formidable');

http.createServer(function (req, res){
	if(req.url == '/fileupload'){
		var form = new formidable.IncomingForm();
		form.parse(req, (error, fields, files) => {
			console.log(files);
			res.write('File uploaded');
			res.end();
		});
	}else{
		filesystem.readFile('uploadFile.html', (error, data) => {
			res.write(data);
			return res.end();
		});
	}
}).listen(8080);
