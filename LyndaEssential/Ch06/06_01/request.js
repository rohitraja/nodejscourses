var https  = require('https');
var fs = require('fs');

var options ={
		hostname:"en.wikipedia.org",
		port:"443",
		path:"/wiki/Barack_Obama",
		method:"GET"
}


var req = https.request(options,function(res){
	var responsebody ="";

	console.log("Request started");
	console.log(`Server Status ${req.statusCode}`);
	console.log("Requst Header: ",req.headers)
	res.setEncoding("UTF-8");
	res.once("data",function(chunk){
		console.log("chunk");
	});
	res.on("data", function(chunk){
		console.log("chunk lenght: "+chunk.length);
		responsebody+=chunk;
	});
	res.on("end",function(){
		fs.writeFile("Barack_Obama.html",responsebody,function(err){
			if(err){
				throw err;
			}
			console.log("File Download");
		})
	});	
});

req.on("error",function(err){
	console.log("Problem with downloading err: "+err);
});

req.end();
