/**
 * Created by rohit on 13/08/17.
 */

function grab(flag){
     var index = process.argv.indexOf(flag);
     return index==-1?null:process.argv[index+1];
}


var user = grab('--user');
var greeting  = grab('--greeting');

if(!user || !greeting){
    console.log("You blew it");
}else{
    console.log(`Hi ${user} I am good how about you:-> ${greeting}`);

}

