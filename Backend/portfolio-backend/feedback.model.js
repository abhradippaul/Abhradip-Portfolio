const mongoose = require("mongoose")
const feedbackSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email : String,
    text : {
        type : String,
        required : true
    }

},{timestamps: true})

const feedbackModel = mongoose.model("feedback",feedbackSchema)

module.exports = {feedbackModel}