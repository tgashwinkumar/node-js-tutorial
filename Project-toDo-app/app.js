var bodyParser = require('body-parser');
var todoController = require('./controllers/todoController');

var express = require('express');
var app = express();

//Set up template engine
app.set('view engine','ejs');

//Access static files like .css
app.use(express.static('./public'));

//Fire Controllers
todoController(app);

//Listen to port 3000
app.listen(3000,'127.0.0.1',function(){
    console.log("The app is being listened in port 3000 successfully.");
});







/*
    /   -    Root directory
    ./  -   Current directory
    ../ -   Parent directory
*/