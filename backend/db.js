// const mysql=require("mysql2"); 
import mysql from 'mysql2';
import {Sequelize} from 'sequelize' 
import dotenv from 'dotenv';
dotenv.config();
// require('dotenv').config();
const sequelize =new Sequelize(process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {host:"localhost",
     port:3306,
     dialect:'mysql' 
   }
    
)
sequelize.authenticate()
   .then(()=>{
    console.log('Connected to the database successfully!');
   })
   .catch((err)=>{
    console.log("unable to connect the database: ", err);
   })
export default sequelize;

