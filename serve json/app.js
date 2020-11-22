var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log("Request was made: " + req.url)
    res.writeHead(200, {'Content-Type': 'application/json' });

    var Obj = {
        name: "Uchiha Itachi",
        job: 'Konoha shinobi',
        age: 21,

    };

    res.end(JSON.stringify(Obj));

});

server.listen(3000, '127.0.0.1');
console.log("Port 3000 is presently being listened, successfully.")
