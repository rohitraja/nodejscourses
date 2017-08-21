var expect = require('chai').expect;
var tools = require('../lib/tools');
describe("printName()",function(){
	it("should print last name first",function(){

		var results = tools.printName({ first: "Rohit",last: "Raja"});
		expect(results).to.equal("Raja, Rohit");



	});

});