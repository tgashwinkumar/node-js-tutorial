var express = require('express');
var app = express();

app.get('/' , function(req,res){
    res.send('Home Page is opened by the user successfully.')
});

app.get('/home' , function(req,res){
    res.send('Home Page is opened by the user successfully.')
});

app.get('/contact-us' , function(req,res){
    res.send('Contact Us page is opened by the user successfully. But the details will be fed later by the server.')
});

app.listen(3000, '127.0.0.1',function(){
    console.log("Express object: app, being listened in port 3000 successfully.")
})