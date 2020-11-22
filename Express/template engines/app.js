var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/' , function(req,res){
    console.log('Home Page is opened by the user successfully.');
    //This was used to call the .html files
    // res.sendFile(__dirname + '/index.html');

    res.render('index');
});

app.get('/contact-us' , function(req,res){
    console.log('Contact Us page is opened by the user successfully.')
    // res.sendFile(__dirname + '/contact.html');

    res.render('contact')
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