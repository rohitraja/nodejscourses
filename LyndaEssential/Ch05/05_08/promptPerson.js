var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};


rl.question("What is the name of a real person? ", function(answer) {

	realPerson.name = answer;

	var stream = fs.createWriteStream(realPerson.name+".md");
	stream.write(`${realPerson.name} \n ===================\n\n Sayings\n----------------\n`);
	rl.setPrompt(`What would ${realPerson.name} would like to say..`);
	rl.prompt();
	rl.on('line',function(saying){
		stream.write(`* ${saying} \n`);
		realPerson.sayings.push(saying);
		if(saying.toLowerCase().trim()=="exit"){
			stream.close();
			rl.close();
		}else{
			rl.setPrompt("What else would you like to say? type exit to exit ");
			rl.prompt();
		}
	});
});



rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();

});
