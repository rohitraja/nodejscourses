var fs = require('fs');
var path = require('path');


fs.readdir("./lib",function(err,files){

	files.forEach(function(fileName){
		var file = path.join(__dirname,"lib",fileName);
		var filestatus = fs.statSync(file);
		if(filestatus.isFile() && fileName!==".DS_Store"){
			fs.readFile(file,"UTF-8",function(err,contents){
				console.log(contents);
			});
		}
	});
})