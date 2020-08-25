const mongoose = require("mongoose")
const { boolean } = require("type-mapping")
Schema=mongoose.Schema;


var gameschema = new Schema({
gameid: String,
host: {
    nickname: String,
    hostPhNo: String
},
participants : [{
    participantid: String,
    phone : String,
    name: String,
    ticket: [[Number]],
    prize: [String]
    }],
variations: {
    type: Map,
    of: String
  },
currentState: [Number]  
})

module.exports = mongoose.model("game", gameschema,"game")