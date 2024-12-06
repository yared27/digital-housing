const express = require('express');
const bcrypt = require('bcrypt');
const router=express.Router();
const db=require('../db');

//signup
router.post('/signup',async (req,res)=>{
    const formData=req.body;
    const {
        FNAME:fname,
        LNAME:lname,
        EMAIL:email,
        PHON_NO:phone_no,
        COUNTRY:country,
        REGION:region,
        CITY:city,
        SUBCITY:subcity,
        PASSWORD:password
    }=formData
    try{
    const query1='SELECT *FROM user_info WHERE email=?';
    db.query(query1,[email], async (err,results)=>{
        if(err){
            console.error('Database error:',err);
            return res.status(500).json({error:'Database error'});
        }
        if(results.length>0){
            return res.status(400).json({error:'Email already exist'});
        }
        const hashedpassword= await bcrypt.hash(password,10);
        const query="INSERT INTO user_info (first_name,last_name,email,phone_number,country,region ,city,subcity,password) VALUES(?,?,?,?,?,?,?,?,?)";

   
    db.query(query,
        [fname,lname,email,phone_no,country,region,city,subcity,hashedpassword],
        (err,results) =>{
            if(err){
                console.error(err);
                res.status(500).json({error:"something bad happens try again"});
                return;
            }
             res.json({ message:'From data received successfully!'});

            });
        });}
     catch(error){
        res.status(500).json({error:"Internal server error"});
     }   

});
//login
router.post('/login',(req,res)=>{
    const {EMAIL,PASSWORD}=req.body
    const query='SELECT * FROM user_info  WHERE email= ?'
    db.query(query,[EMAIL],async (err,results)=>{
        if(err) throw err;
        if(results.length>0){
            const user =results[0];
            console.log(user.email);
            console.log(PASSWORD);
            const isMatch= await  bcrypt.compare(PASSWORD,user.password);
            if(isMatch){
                res.status(200).json({message:'login successfully'});
                console.log('user exists');
            }
            else{
                res.status(401).json({message:'Invalid credential'});
                console.log('user exists inv');
            }
        }
        else 
            res.status(404).json({message:'User not found'});
    })
})
module.exports=router;