/**
 * Created by rohit on 14/08/17.
 */
var waittime = 3000;
var currentTime=0;
var waitInterval = 500;
var percentWait =0;
function printWatiPercent(percent){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${percent}%`);
};
var interval = setInterval(function () {
    currentTime +=waitInterval;
    percentWait = Math.round(currentTime/waittime*100);
    printWatiPercent(percentWait);
    // console.log(`Wait time: ${currentTime/1000} seconds...` );
    // process.stdout.write("Done progres ->>"+printWatiPercent(percentWait));
},waitInterval);

setTimeout(function () {
    clearInterval(interval);
  console.log("\n \n Done!...");
},waittime);