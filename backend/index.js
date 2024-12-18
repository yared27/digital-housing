const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser=require('body-parser');
const jwt= require('jsonwebtoken')
const authRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin');
const sequelize=require('./db');
// const user =require('./models/User');
const PORT = process.env.PORT;
const app = express();
const path=require('path');
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
app.use('/auth',authRoutes);
app.use('/admin',adminRoutes);
//serve  react frontend 
app.use(express.static(path.join(__dirname,'../build')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../build','index.html'))
});
(async()=>{
    try{
    await sequelize.authenticate();
    console.log("db connected");
    await  sequelize.sync();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
   }
    catch(error){
        console.log('unable to connect to the database');
    }}
)
();
