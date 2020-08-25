var mongoose=require('mongoose'),
 game= require("../models/game")

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


exports.getmyticket = function(req, res){
    console.log("In getmycard activity GameID:"+req.query.gid+",ParticipantID="+req.query.pid);

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
                            cond: {"$eq" : ['$$participant.participantid',req.query.pid]}

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

