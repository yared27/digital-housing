const express = require('express');
const bcrypt = require('bcrypt');
const router=express.Router();
const db=require('../db');
const jwt=require('jsonwebtoken');
const User=require('../models/user');
//signup
router.post('/signup',async(req,res)=>{
    const {firstname,lastname,email,phone_number,country,region,city,subcity,password}=req.body;
    console.log(req.body)
    try{
        const exits_user=await User.findOne({where:{email}});
        if(exits_user){
            return res.status(400).json({error:"Email already exists"});
        }
        const hashedpassword=await bcrypt.hash(password,10);
        const user=await User.create(
        {
            firstname,
            lastname,
            email,
            phone_number,
            country,
            region,
            city,
            subcity,
            password:hashedpassword
        });
        res.status(201).json({message:'user created successfully',user});
    }
    catch(error){
        console.error(error);
        res.status(500).json({error:'Something went wrong'});
    }
});
//login 
router.post('/login',async(req,res)=>{
     const {email,password}=req.body;
     try{
     const user= await User.findOne({where:{email}});
     if(!user){
        return res.status(404).json({message:'user  not found'});
     }
     const isMatch= await bcrypt.compare(password,user.password);
     if(!isMatch){
        return res.status(401).json({message:'Invalid credentials'});
     }
     const token =jwt.sign({id:user.id,email:user.email},process.env.JWT_SECRET,{
        expiresIn:'1d'
     });
     res.status(200).json({message:"Login successful",token});
     }
     catch(error){
        console.log(error);
        res.status(500).json({error:'something wen wrong'});
     }

})
module.exports=router;