var http = require('http');
var data = require("./data/inventory.json");



var server = http.createServer(function(req,res){


	if(req.url ==="/"){
		res.writeHeader(200,{"Content-Type": "text/json"});
		res.end(JSON.stringify(data));		
	}else if(req.url==="/instock"){
		inStockObjects(res);
	}else if(req.url ==="/onorder"){
		onOrderObjects(res);
	}else{
		res.writeHeader(404,{"Content-Type": "text/plain"});
		res.end("Woops..... page not found");	
	}

});
server.listen(3000);
console.log("Server is listening on Port: 3000");



function inStockObjects(res){

	var inStock = data.filter(function(obj){
		return obj.avail==="In stock";
	});
	res.end(JSON.stringify(inStock));
}

function onOrderObjects(res){
	var	onOrder = data.filter(function(obj){
		return obj.avail==="On back order";
	});
	res.end(JSON.stringify(onOrder));

}