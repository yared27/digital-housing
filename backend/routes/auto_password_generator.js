import express from 'express'
import crypto from 'crypto'
const generatePassword=(length=16)=>{
    const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    return Array.from(crypto.randomFillSync(new Uint8Array(length)))
            .map((x)=>chars[x%chars.length])
            .join('');
};
const router=express.Router()
router.get("/auto_password",(req,res)=>{
    const password=generatePassword(16);
    res.json({password});
});
export default router