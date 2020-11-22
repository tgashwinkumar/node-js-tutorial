var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log("Request was made: " + req.url)
    if (req.url=='/home' || req.url == '/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
        console.log('200');
    }else if(req.url == '/api/shinobi'){
        var shinobi = [
            {name: "Itachi", clan:"Uchiha"},
            {name:"Kakashi", clan:"Hatake"}
        ]

        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(shinobi));
    }else{
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
        console.log('404');
    }

});

server.listen(3000, '127.0.0.1');
console.log("Port 3000 is presently being listened, successfully.");

