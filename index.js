var express = require('express');
var app = express();
var path = require('path');
var servStatic = require('serve-static');
var routes = require('./routes/homeRouter');
var cors = require('cors');
var bodyparser = require('body-parser');


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));


app.use(servStatic(path.join(__dirname,'public')));
app.use(servStatic(path.join(__dirname,'views')));
app.set('views' , path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/s' , routes); 

app.use('/' , function(req , res , next){
    res.render("index");    
});






app.listen(3000 , function(){
    console.log('Server is working on 3000');
});