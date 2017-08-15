var fs = require('fs');

var md =`
Sample Markdown Title
=====================

Sample Sub Title
----------------
*point 
*point
*point
`;


fs.writeFile("sample.md",md.trim(),function(err){
	if(err){
		throw err;
	}
	console.log("File Created.");
})