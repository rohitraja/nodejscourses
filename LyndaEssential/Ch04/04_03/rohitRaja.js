

var Person = require("./lib/Person");

var rohit = new Person("Rohit");

var kunal = new Person("Kunal");

kunal.on("speek",function(said){
	console.log(`${this.name} says -> ${said}`);
});

rohit.on("speak",function(said){
		console.log(`${this.name} says ${said}`);
});

kunal.emit('speek',"It is better to be alone than to ben in bad company.");
rohit.emit('speak',"You may delay but time will not. ");