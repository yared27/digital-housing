const express = require('express');
const bcrypt = require('bcrypt');
const router=express.Router();
const db=require('../db');
const jwt=require('jsonwebtoken');
const User=require('../models/user')

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
        res.status(201).json({message:'user created successfully',user})
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
        return res.status(404).json({message:'user  not found'})
     }
     const isMatch= await bcrypt.compare(password,user.password);
     if(!isMatch){
        return res.status(401).json({message:'Invalid credentials'});
     }
     const token =jwt.sign({id:user.id,email:user.email},process.env.JWT_SECRET,{
        expiresIn:'1d'
     })
     res.status(200).json({message:"Login successful",token})
     }
     catch(error){
        console.log(error);
        res.status(500).json({error:'something wen wrong'});
     }

})
// router.post('/signup',async (req,res)=>{
//     const formData=req.body;
//     const {
//         FNAME:fname,
//         LNAME:lname,
//         EMAIL:email,
//         PHON_NO:phone_no,
//         COUNTRY:country,
//         REGION:region,
//         CITY:city,
//         SUBCITY:subcity,
//         PASSWORD:password
//     }=formData
//     try{
//     const query1='SELECT *FROM user_info WHERE email=?';
//     db.query(query1,[email], async (err,results)=>{
//         if(err){
//             console.error('Database error:',err);
//             return res.status(500).json({error:'Database error'});
//         }
//         if(results.length>0){
//             return res.status(400).json({error:'Email already exist'});
//         }
//         const hashedpassword= await bcrypt.hash(password,10);
//         const query="INSERT INTO user_info (first_name,last_name,email,phone_number,country,region ,city,subcity,password) VALUES(?,?,?,?,?,?,?,?,?)";

   
//     db.query(query,
//         [fname,lname,email,phone_no,country,region,city,subcity,hashedpassword],
//         (err,results) =>{
//             if(err){
//                 console.error(err);
//                 res.status(500).json({error:"something bad happens try again"});
//                 return;
//             }
//              res.json({ message:'From data received successfully!'});

//             });
//         });}
//      catch(error){
//         res.status(500).json({error:"Internal server error"});
//      }   

// });
//login
// router.post('/login',async (req,res)=>{
//     const {EMAIL,PASSWORD}=req.body
//     const query='SELECT * FROM user_info  WHERE email= ?'
//     db.query(query,[EMAIL],async (err,results)=>{
//         if(err) throw err;
//         if(results.length>0){
//             const user =results[0];
//             console.log(user.email);
//             console.log(PASSWORD);
//             console.log(user.password)
//             const isMatch= await  bcrypt.compare(PASSWORD,user.password);
//             if(isMatch){
//                 res.status(200).json({message:'login successfully'});
//                 console.log('user exists');
//             }
//             else{
//                 res.status(401).json({message:'Invalid credential'});
//                 console.log('user exists inv');
//             }
//         }
//         else 
//             res.status(404).json({message:'User not found'});
//     })
// })
module.exports=router;