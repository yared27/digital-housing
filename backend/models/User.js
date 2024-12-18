const {DataTypes}=require('sequelize')
const db=require('../db');
const user=db.define('user',{
    firstname:{
        type:DataTypes.STRING,
        allowNull:false,   
    },
    lastname:{
     type:DataTypes.STRING,
     allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    phone_number:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    country:{
        type:DataTypes.STRING,
        allowNull:null

    },
    region:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    city:{
        type:DataTypes.STRING,
        allowNull:false

    },
    subcity:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }



});
module.exports=user

