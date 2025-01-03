import { DataTypes, Sequelize } from 'sequelize';
import db from '../db.js'
// const db=require('../db');
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
// owners property
const properties=db.define('properties',{
    type:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city:{
      type:DataTypes.STRING,
      allowNull:false
    },
    cost:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contact:{
        type:DataTypes.STRING,
          allowNull:false
    },
    imageUrl:{
        type:Sequelize.JSON,
        allowNull:false
    }

})
export  {user,properties}
