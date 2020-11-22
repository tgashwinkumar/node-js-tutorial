var fs = require('fs');

//makes the directory synchronously
fs.mkdirSync('stuffSync');
console.log('Directory is created sync.')

//removes the directory after a delay time synchronously
setTimeout(function(){
    console.log('Directory is deleted sync.')
    fs.rmdirSync('stuffSync');
}, 5000);

//makes the directory asynchronously
fs.mkdir('stuff', function(){
    console.log('Directory is created async.');
    fs.readFile('readMe.txt', function(err,data){
        fs.writeFile('./stuff/writeMe.txt',data,function(){})
    });
});

//Deletes the file
//a direcory cant be removed without it being empty
fs.unlink('./stuff/writeMe.txt',function(){
    fs.rmdir('stuff',function(){
        console.log('Directory removed async.');
    });
});

