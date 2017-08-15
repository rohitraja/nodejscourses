var fs = require('fs');

try{
	fs.unlinkSync("./lib/config.json")	
	console.log("File is removed");
}catch(err){
	console.log(err);
}

fs.unlink("notes.md",function(err){
	if(err){
		console.log(err);
	}else{
		console.log("notes.md is removed")
	}
})