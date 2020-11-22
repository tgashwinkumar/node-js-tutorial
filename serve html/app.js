var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log("Request was made: " + req.url)
    res.writeHead(200, {'Content-Type': 'text/html' });

    var myReadStream = fs.createReadStream(__dirname + '/blog.html', 'utf-8');
    //pipe() method can only be used on readable streams
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("Port 3000 is presently being listened, successfully.")
