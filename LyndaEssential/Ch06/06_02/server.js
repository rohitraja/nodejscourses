var http = require('http');


var server = http.createServer(function(req,res){
	res.writeHeader(200,{"Content-Type": "text/html"});
	res.end(`
		<!DOCTYPE html>
			<html>
				<header>
					<title>HTML Response</title>
				</header>
				<body>
					<h1>Hello every one. Server is ready to server your. </h1>
					<p>${req.url}</p>
					<p>${req.method}</p>
				</body>
			</html>
		`);

});

server.listen(3000);
console.log("Server is listning on port 3000")