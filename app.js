const express = require('express')
, http = require('http')
, path = require('path')
, mongoose = require('mongoose').set('debug', true)
, bodyParser = require('body-parser');
/*, admin = require('firebase-admin')



var serviceAccount = require("./tambolaonline-afc88-firebase-adminsdk-hgpki-d46c71983e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tambolaonline-afc88.firebaseio.com"
});*/

// The topic name can be optionally prefixed with "/topics/".
var topic = '1';

var message = {
  data: {
    number: '74',
    /*winner: {
      FIRST_ROW: "Kartik"
    } */
  },
  topic: topic
};


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/tamboladb',{useNewUrlParser: true});


var api = require("./controllers/api")

app.get('/getmyticket', api.getmyticket); //Called by participant of a game
app.get('/savemygame', api.savegame); // Called by host of the game to save his/her game
app.get('/getmyactivegames',api.getmyactivegames) //Called by everyone to get all active games
app.post('/storegamestatus',api.storegamestatus) //Called during game to update game status
app.get('/getmyhostedgame',api.getmyhostedgame) //Called by host of the game to start the game 
app.get('/', function(req,res){
  res.send("Hello world to "+req.query.myname);

});






app.listen(3000, function () {
  console.log('Example app listening on port 80!');
});