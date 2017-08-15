var fs = require('fs');
// fs.renameSync("./assets/logs","./logs");
// console.log("Direcotry is removed");



// fs.rmdir("./assets",function(err){
// 	if(err){
// 		throw err;
// 	}
// 	console.log("Assets Directory Removed");
// });
fs.readdirSync("./logs").forEach(function(file){
	fs.unlinkSync("./logs/"+file);
})

fs.rmdir("./logs",function(err){
	if(err){
		throw err;
	}
	console.log("Logs Directory Removed")
});