const mongoose = require("mongoose")
const { boolean } = require("type-mapping")
Schema=mongoose.Schema;

const schema = mongoose.Schema({
gameid: String,
participants : [{ type: Schema.Types.ObjectId, ref: 'Participant' }],
variations: [{
    variationname: String,
    won: Boolean
}],
currentState: [Number]  
})

module.exports = mongoose.model("Game", schema)