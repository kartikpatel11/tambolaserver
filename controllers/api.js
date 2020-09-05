var mongoose=require('mongoose'),
 game= require("../models/game"),
admin = require('firebase-admin'),
 bodyParser = require('body-parser');

 var serviceAccount = require("../tambolaonline-afc88-firebase-adminsdk-hgpki-d46c71983e.json");
const { hasUncaughtExceptionCaptureCallback } = require('process');

 admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL: "https://tambolaonline-afc88.firebaseio.com"
 });
 

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

exports.storegamestatus = function(req, res) {
    console.log("In storegamestatus  GameID:"+req.body.gid+",currnum="+req.body.currnum);

    game.findOneAndUpdate({gameid:req.body.gid},{$push: {currentState:req.body.currnum}},function(err,doc){
        if(err)
        {
            console.log('Error updating Game:'+req.body.gid+" with current number: "+req.body.currnum);
            res,status(300).send({errmsg: "not able to update game status"});
        }
        else
        {
            //send number details to FCM for players to know
            var message = {
                data: {
                  number: req.body.currnum,
                  /*winner: {
                    FIRST_ROW: "Kartik"
                  } */
                },
                topic: req.body.gid
              };

              admin.messaging().send(message)
              .then((response) => {
                  // Response is a message ID string.
                  console.log('Successfully sent message:', response);
                  res.status(200).json("Message sent Successfully");
                })
                .catch((error) => {
                  console.log('Error sending message:', error);
                });   

        }
    });

};

exports.getmyticket = function(req, res){
    console.log("In getmycard activity GameID:"+req.query.gid+",ParticipantID="+req.query.phno);

   game.aggregate(
       [
           {
                $match : 
                {
                    "gameid":req.query.gid
                }
           },
           {
                $project: 
                {
                    gameid: '$gameid',
                    variations: '$variations',
                    currentState: '$currentState',
                   participants : 
                   {
                        $filter:
                        {
                            input: '$participants',
                            as: 'participant',
                            cond: {"$eq" : ['$$participant.phone',req.query.phno]}

                        }
                   }
                }

           }
        ], function (err, docs) {
            console.log("===== Sending Response as "+ docs[0])
            res.json(200,docs[0]);
    });
};

exports.getmyactivegames = function(req,res) {

    console.log("In getmyactivegames PhNo:"+req.query.phno);

    game.aggregate(
        [
            {
                $match:
                {
                    $or: [
                            {"participants.phone": req.query.phno},
                            {"host.hostPhNo": req.query.phno}
                    ]
                }
            },
            {
                $project: 
                {
                    gameid:'$gameid',
                    host: '$host',
                    numberOfParticipants: {$size: '$participants'},
                    numberOfVariations: {$size: {"$objectToArray":"$variations"}}
                }
            }
        ], function(err, docs) {
                res.json(200, docs);
        } 
    );
};

exports.getmyhostedgame = function(req,res) {
    console.log("In getmyhostedgame gid:"+req.query.gid);

    game.findOne({gameid:req.query.gid}, function(err,docs){
        res.json(200,docs)
    }
)};

