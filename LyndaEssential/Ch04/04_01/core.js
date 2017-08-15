var path = require('path');
var util = require('util');
var v8 = require('v8');

util.log("File path: "+ path.basename(__filename));
var dir_Upload = path.join(__dirname,'WWW','files','uploads');
util.log("Upload Dir: "+ dir_Upload);
util.log("System Usage: "+ JSON.stringify(v8.getHeapStatistics()));