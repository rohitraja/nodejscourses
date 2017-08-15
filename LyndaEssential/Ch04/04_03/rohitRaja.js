var EventEmitter = require('events').EventEmitter;
var util = require('util');



var Person = function(name){
	this.name = name;
};

util.inherits(Person,EventEmitter);



var rohit = new Person("Rohit");

rohit.on("speak",function(said){
		console.log(`${this.name} says ${said}`);
});

rohit.emit('speak',"You may delay but time will not. ");