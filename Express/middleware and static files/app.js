var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');

//serves as middleware and gives access to the static files in directory /assets
app.use('/assets',express.static('assets'));


/*
app.use('/assets', function(req,res,next){
    console.log(req.url);
    next();
});
*/

app.get('/' , function(req,res){
    console.log('Home Page is opened by the user successfully.');
    //This was used to call the .html files
    // res.sendFile(__dirname + '/index.html');

    res.render('index');
});


app.get('/contact-us' , function(req,res){
    console.log('Contact Us page is opened by the user successfully.\nQueries given: ');
    console.log(req.query);
    // res.sendFile(__dirname + '/contact.html');

    res.render('contact',{query: req.query});
});


app.post('/contact-us' , urlencodedParser, function(req,res){
    console.log(req.body);

    res.render('contact-success',{data: req.body});
});

//in the url, any name after ':' refers to the parameter
app.get('/profile/:id', function(req,res){
    console.log('The profile with id: ' + req.params.id+ ', was requested by the user.');

    var data = {
        name : req.params.id,
        job: 'shinobi',
        age: 21,
        clansmen: ['Sasuke','Madara', 'Shisui','Sarada']
    };
    //by default, the render() looks to the views folder to its present directory
    res.render('profile', data);
});

app.listen(3000, '127.0.0.1',function(){
    console.log("Express object: app, being listened in port 3000 successfully.")
})