import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import auto_passwordRoutes from './routes/auto_password_generator.js'
import owner_propertyRoutes from './routes/owner_property.js';
import sequelize from './db.js';

const PORT = process.env.PORT;
const app = express();
import path, { dirname } from 'path';
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.use('/auth',authRoutes);
app.use('/admin',adminRoutes);
app.use('/owner_property',owner_propertyRoutes);
app.use('/auto_password_generator',auto_passwordRoutes);
//create-dirname 
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
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
