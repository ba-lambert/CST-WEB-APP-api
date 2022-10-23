const notification = require("../models/blogModel")
const mongoose = require("mongoose")

const postNotification = async (req,res)=>{
    const {title,body,createdBy} = req.body
    try{
        const newNotification = await notification.create({title,body,createdBy})
        res.status(200).json(newNotification)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
//get all notifications

const getallNotifications = async (req,res)=>{
    const notific =await notification.find({}).sort({createdAt:-1})
    res.send(notific)
}
//get single notification

const getsingleNotifications = async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg:'There is no such notification'})
    }
    const getNot = await notification.findById(id)
    if(!getNot){
        return res.status(404).json({error:"No surch notificatio"})
    }
    res.status(200).json(getNot)
}

//update a notification
const updateNotification = async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid){
        res.status(404).json({mssg:'There is no such notification'})
    }
    const getNot = await notification.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!getNot){
        res.status(404).json({mssg:'There is no such notification'})
    }
    res.status(200).json(getNot)
}

//removing a notification 
const deleteNot = async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid){
        res.json(200).json({mssg:'There is no such notification'})
    }
    const delNot = await notification.findOneAndDelete({_id:id})
    if(!delNot){
        res.status(404).json({mssg:'There is no such notification'})
    }
    res.status(200).json({mssg:'deletef successfully'})
}
module.exports = {
    postNotification,
    getallNotifications,
    getsingleNotifications,
    updateNotification,
    deleteNot
}