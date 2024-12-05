const mysql=require("mysql"); 
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
module.exports=mysqlConnection;