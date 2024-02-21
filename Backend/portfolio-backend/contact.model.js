const mongoose = require("mongoose")
const contactSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    text : {
        type : String,
        required : true
    }
},{timestamps : true})
const contactModel = mongoose.model("contact",contactSchema)
module.exports = contactModel