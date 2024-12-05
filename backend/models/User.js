const mongoose =require('mongoose');
const userSchema= new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{type:String,required :true,unique :true},
    phone_number:Number,
    country:String,
    region:String,
    city:String,
    subcity:String,
    password:{type:String,required:true},

})
module.exports=mongoose.model('user',userSchema);