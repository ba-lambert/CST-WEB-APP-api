const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const validator = require('validator')
const userSchema =new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
//static methods
userSchema.statics.signUp = async function(email,password){
    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }
    //validation
    if(!validator.isEmail(email)){
        throw Error('Email is invalid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error ('Password must be Strong')
    }
//hashing password
const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash(password,salt)
const user = await this.create({email , password:hashPassword})
return user
}
userSchema.statics.loginUser=async function(email,password){
    if(!email || !password){
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({email})
    if(!email){
        throw Error('Increct email')
    }
    const match =await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Increct password')
    }
    return user
}

module.exports = mongoose.model("user",userSchema)