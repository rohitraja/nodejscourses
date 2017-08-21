var expect = require('chai').expect;
var tools = require('../lib/tools');



describe("Tools",function(){
	describe("printName()",function(){
		it("should print last name first",function(){

			var results = tools.printName({ first: "Rohit",last: "Raja"});
			expect(results).to.equal("Raja, Rohit");



		});

	});

	describe("loadWiki()",function(){
		this.timeout(5000);
		it("load Abraham lincone's wiki page",function(done){
			tools.loadWiki({first: "Abraham",last:"Lincoln"},function(html){
							expect(html).to.be.ok;
							done()
			});
		});
	});
});


