var exec = require('child_process').exec;


exec("git status",function(err,stdout){

	if(err){
		throw err;
	}else{
		console.log("Git Status: "+stdout);
	}
});