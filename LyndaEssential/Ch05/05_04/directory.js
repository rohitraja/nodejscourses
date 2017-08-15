var fs = require('fs');

console.log("Execution to cerate directory");
if(fs.existsSync("lib")){
	console.log("lib directory already exist")
}else{
	fs.mkdir("lib",function(err){

	if(err){
		throw err;
	}else{
		console.log("Directory created");
	}
	});
}

