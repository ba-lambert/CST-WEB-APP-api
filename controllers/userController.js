const user = require('../models/userModel');
const jwt = require('jsonwebtoken')
//login User
const createToken = (_id)=>{
    return jwt.sign({_id},'secret',{expiresIn:'3d'})
}
const loginUser = async(req,res)=>{
    const {email,password}=req.body
    try{
        const user1 = await user.loginUser(email,password)
        const token =createToken(user._id)
        res.status(200).json({email,token})
    }catch(error){
        res.status(404).json({error:error.message})
    }
}
const registerUser = async(req,res)=>{
    const {email,password}= req.body
    try{
        const newUser =await user.signUp (email,password)
        const token = createToken(user._id)
        res.status(200).json({email,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
module.exports = {
    loginUser,
    registerUser
}