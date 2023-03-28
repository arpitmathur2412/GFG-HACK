const mongoose=require("mongoose");

const userschema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    
    age:{
        type:String,
        required:true
    
    },
    income:{
        type:Number,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        default:Date.now
    } 
})

module.exports=userschema