const express=require('express');
const router =express.Router();
const db=require('../db');
router.get("/install",(req,res)=>{
    let createUser=`CREATE TABLE IF NOT EXISTS user_info(
       user_id int auto_increment not null,
       first_name varchar(50),
       last_name varchar(50) ,
       email varchar(50),
       phone_number varchar(40),
       country varchar(40),
       region varchar(40),
       city varchar(40),
       subcity varchar(40),
       password varchar(50),
       PRIMARY KEY (user_id)
   
    ) `
    db.query(createUser,(err,result)=>{
       if(err) console.log(err)
       else  
        console.log(result)
        res.end("created")
    });
   });
   module.exports=router;