const express = require('express');
const bcrypt = require('bcrypt');
const router=express.Router();
const db=require('../db');
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
    const hashedpassword= await bcrypt.hash(password,10)
    db.query("INSERT INTO user_info (first_name,last_name,email,phone_number,country,region ,city,subcity,password) VALUES(?,?,?,?,?,?,?,?,?)",
        [fname,lname,email,phone_no,country,region,city,subcity,hashedpassword],
        (err,results) =>{
            if(err){
                console.error(err);
                res.status(500).json({error:"something bad happens try again"});
                return;
            }
        
             res.json({ message:'From data received successfully!'});

        });}
     catch(error){
        res.status(500).json({error:"Internal server error"});
     }   

});
module.exports=router;