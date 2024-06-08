const mongoose = require("mongoose")

const {Schema}= mongoose

const taskSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    priority:{
        type: String,
        enum:["hight", "medium", "low"]
    }
})

module.exports =mongoose.model('Check', taskSchema);