const mongoose = require('mongoose')
const notificationSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    createdBy:{
        type:String,
        required:true
    },
    img:{
        data:Buffer,
        contentType : String
    }
},{timestamps:true})
module.exports = mongoose.model('notifications',notificationSchema)