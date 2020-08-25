const express = require('express')
, http = require('http')
, path = require('path')
, mongoose = require('mongoose').set('debug', true)
, bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/tamboladb',{useNewUrlParser: true});


var api = require("./controllers/api")

app.get('/getmyticket', api.getmyticket);
app.get('/savemygame', api.savegame);
app.get('/getmyactivegames',api.getmyactivegames)
app.get('/', function(req,res){
    res.send("Hello world to "+req.query.myname);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});