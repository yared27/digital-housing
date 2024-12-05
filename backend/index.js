const express = require('express');
require('dotenv').config();
const mysql=require("mysql"); 
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/User');
const path=require('path');
const { table } = require('console');
const bodyParser=require('body-parser');
const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
const mysqlConnection=mysql.createConnection({
    user:process.env.BD_USERNAME,
    password:process.env.DB_PASSWORD,
    host:"localhost",
    database:process.env.BD_USERNAME,
    port:3306,

});
mysqlConnection.connect((err)=>{
    if(err) console.log(err);
    else console.log("Connected");
});
app.get("/install",(req,res)=>{
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
 mysqlConnection.query(createUser,(err,result)=>{
    if(err) console.log(err)
    else  
     console.log(result)
     res.end("created")
 });
});
app.post('/signup',async (req,res)=>{
    const formData=req.body;
    const {
        FNAME:fname,
        LANAME:lname,
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
    mysqlConnection.query("INSERT INTO user_info (first_name,last_name,email,phone_number,country,region ,city,subcity,password) VALUES(?,?,?,?,?,?,?,?,?)",
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


//serve  react frontend 
app.use(express.static(path.join(__dirname,'../build')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../build','index.html'))
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
