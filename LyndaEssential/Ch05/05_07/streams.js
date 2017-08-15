var fs = require('fs');


var readStream = fs.createReadStream("./chat.log","UTF-8")

var data ="";

readStream.once("data",function(){
	console.log("\n\n\n");
	console.log("Reading started");
	console.log("\n\n\n");
});

readStream.on("data",function(chunk){
	process.stdout.write(`chunk: ${chunk.length}  |  `);
	data += chunk;
});

readStream.on("end",function(){
	console.log("\n\n\n");
	console.log("Data length: "+data.length);
	console.log("\n\n\n");
})