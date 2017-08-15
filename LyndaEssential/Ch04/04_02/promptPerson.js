var readLine = require('readline');


var rl = readLine.createInterface(process.stdin,process.stdout);

var realPerson = {
	name:"",
	sayings:[]
}

rl.question("Hey buddy what's your name?",function(answer){
	realPerson.name = answer;
	console.log(realPerson.name);
	rl.setPrompt(`Hey ${realPerson.name} what are your thoughts?`);
	rl.prompt();
	rl.on('line',function(sayings){
		realPerson.sayings.push(sayings);

		if(sayings=="exit"){
			rl.close();
		}else{
			rl.setPrompt(`What else do you say ${realPerson.name}? type exit to exit.   `);
			rl.prompt();			
		}
	})
});

rl.on("close",function(){
	console.log(realPerson.sayings);
	process.exit();
});