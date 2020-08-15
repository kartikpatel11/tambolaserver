var mongoose=require('mongoose'),
Schema=mongoose.Schema;
var game= require("../models/Game")
var participant= require("../models/Participant")

exports.savegame= function(req,res){
var game = new Game(req.body);

game.save(function (err,log) {
        if (err) 
        { 
               console.log('Error adding Game: '+ err); 
            res.status(300).send({errmsg: "Something went wrong. Try again."});
        }
        else
        {
            console.log("activity created successfully!!");
            res.status(201).send({msg:"Changes saved successfully",gameid: game.gameid});
        }

    });
};


exports.getmycard = function(req, res){
	res.send('Getting you your game soon');
};

