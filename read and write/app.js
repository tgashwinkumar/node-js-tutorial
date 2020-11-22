var fs = require('fs');

//For Synchronous reading and writing
// var readMe = fs.readFileSync('readMe.txt', 'utf-8');
// console.log(readMe);

// fs.writeFileSync('writeMe.txt', "The data from readMe.txt: \"" + readMe + "\"\thas been written over, successfully.");



//For Asynchronous reading and writing
fs.readFile('readMe.txt', 'utf-8', function(err, data){
    fs.writeFile('writeMe.txt', data,function(){});
});

