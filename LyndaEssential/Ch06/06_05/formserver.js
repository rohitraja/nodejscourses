var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res){
	if(req.method==="GET"){
		res.writeHeader(200,{"Content-Type": "text/html"});
		fs.createReadStream('./public/form.html').pipe(res);	
	}else if (req.method==="POST"){
		var body="";
		req.on("data",function(chunk){
			body +=chunk;
		});

		req.on("end",function(){

		res.writeHeader(200,{"Content-Type":"text/html"});
			res.end(`
					<!DOCTYPE HTML>
					<html>
						<head>
							Form response
						</head>
						<body>
						 	${body}
						</body>
					</html>
				`);			
		});

	}

	
});

server.listen(3000);
console.log("Server is listning on Port: 3000");