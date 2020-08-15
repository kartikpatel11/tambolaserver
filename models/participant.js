const mongoose = require("mongoose")
const { boolean } = require("type-mapping")

const schema = mongoose.Schema({
participantid: String,
phone : String,
name: String,
ticket: [Number],
prize: String
})

module.exports = mongoose.model("Participant", schema)