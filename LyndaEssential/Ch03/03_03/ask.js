/**
 * Created by rohit on 13/08/17.
 */

var questions = [
    "What is your name?",
    "What do you do?",
    "What is your fev language?"
];


var ans =[];
function ask(index){
    process.stdout.write(`\n\n\n ${questions[index]}`);
    process.stdout.write("    >     ");
}

process.stdin.on("data",function(data){
    ans.push(data.toString().trim());
    if(ans.length<questions.length){
        ask(ans.length);
    }else{
        process.exit();
    }
});

process.on("exit",function(){
    process.stdout.write("\n\n\n\n");
    process.stdout.write(`Hey ${ans[0]} go ${ans[1]} you can do ${ans[2]} latter`);
    process.stdout.write("\n\n\n\n");
});

ask(0);