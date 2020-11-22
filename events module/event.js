var fs = require('fs');
var event = require('events');

const myEmitter = new event.EventEmitter();

fs.readFile('test.txt', (err,data) => {
    myEmitter.emit('readFile');
    console.log(data.toString());    
});

myEmitter.on('readFile', ()=>{
    console.log('\nRead Event Occured.')
});

