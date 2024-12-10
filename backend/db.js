const mysql=require("mysql2"); 
const {Sequelize}=require('sequelize');
require('dotenv').config();
const sequelize =new Sequelize(process.env.BD_USERNAME,
    process.env.BD_USERNAME,
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
module.exports=sequelize;
// const mysqlConnection=mysql.createConnection({
//     user:process.env.BD_USERNAME,
//     password:process.env.DB_PASSWORD,
//     host:"localhost",
//     database:process.env.BD_USERNAME,
//     port:3306,

// });

// mysqlConnection.connect((err)=>{
//     if(err) console.log(err);
//     else console.log("Connected");
// });
