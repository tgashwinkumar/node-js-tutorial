var fs= require('fs');
fs.readFile('text.txt',function(err,data){
    if(err){
        console.log(err);
    }
    setTimeout( function (){
        console.log("Display after two second");
    }, 2000);
});
console.log('Start Here');

