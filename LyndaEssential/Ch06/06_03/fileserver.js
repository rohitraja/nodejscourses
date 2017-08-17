var http = require('http');
var path = require('path');
var fs = require('fs');


var server = http.createServer(function(req,res){

	console.log(`${req.method} request for ${req.url}`);

	if(req.url ==="/"){
		fs.readFile("./public/index.html",function(err,html){
			res.writeHead(200,{"Content-type":"text/html"});
			res.end(html);
		});
	}
	else if(req.url.match(/.css$/)){
		console.log("request for image");
		var css_file_path = path.join(__dirname,"/public",req.url);
		var fileReadStream = fs.createReadStream(css_file_path,"UTF-8");
		res.writeHead(200,{"Content-Type":"text/css"});
		fileReadStream.pipe(res);
	}
	else if(req.url.match(/.jpg$/)){
		console.log("request for image");
		var image_file_path = path.join(__dirname,"/public",req.url);
		var fileReadStream = fs.createReadStream(image_file_path);
		res.writeHead(200,{"Content-Type":"image/jpeg"});
		fileReadStream.pipe(res);
	}else{
		res.writeHead(404,{"Content-Type": "text/plain"});
		res.end("404 File not found");
	}

});

server.listen(3000);
console.log("Server is listning on 3000");