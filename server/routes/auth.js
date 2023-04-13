const express=require("express")
const mongoose=require("mongoose")
const userschema =require("../models/User")
const { body, validationResult } = require('express-validator');
const { json } = require("body-parser");
const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken');
const JWT_SECRET="ajsbvjshbabdjvbdsjvhsdhj"
const fetchuser=require("../middleware/fetchuser")

const router=express.Router();

const User=mongoose.model("User",userschema)
User.createIndexes();

// ROUTE-1
//creating a user on signup POST: "api/auth" doesn't require 

router.post("/createuser",
body('name').exists(),
body('password').isLength({min:8}),
body('email').isEmail(),
body('phone').isLength({min:10,max:10}),
body('age').isNumeric(),
body('income').isNumeric(),

async(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    let temp=await User.findOne({"email":req.body.email})
    if(temp){
        return res.status(400).json({error:"user already exists"})
    }

    else{
        let pass=req.body.password
        const salt= bcrypt.genSaltSync(10)
        const secpass=await bcrypt.hash(pass,salt)

        let user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:secpass,
            age:req.body.age,
            phone:req.body.phone,
            income:req.body.income
        });

        const data={
            user:{
                id:user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_SECRET)
        res.send({authtoken})
    }
})

// ROUTE -2
// Login the user POST: /api/auth/login   doesn't require Authentication
router.post("/login",

body('email').isEmail(),
body('password').exists(),

async (req,res)=>{
    let success=false;

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    else{
        const {email,password}=req.body;

        try {
            const user=await User.findOne({email:email})
            if(!user){
                res.status(400).json({error:"Incorrect credentials entered!"})
            }
            else{
            const passwordcompare= await bcrypt.compare(password,user.password)

            if(!passwordcompare){
                res.status(400).json({error:"Incorrect credentials entered!"})
            }
            else{
                
            const payload={
                user:{
                    id:user.id
                }
            }   

            const authtoken=jwt.sign(payload,JWT_SECRET);
            success=true;
            res.json({success,authtoken})
        }
    }
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error occurred")
        }
    }

})

//Route -3 
// Fetching the user details :GET /api/auth/getuser        (Requires Authentication)
router.get("/getuser",fetchuser,async (req,res)=>{

    try {
        const userid=req.user.id;
        const user=await User.findById(userid).select("-password");
        res.json(user); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal server error occured")
    }
    })

module.exports=router