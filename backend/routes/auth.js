import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {user, properties } from '../models/User.js';
// routes/owner_property.js
 // Named import of both models
// import User from '../models/User.js';  // Ensure you add the `.js` extension
const router = express.Router();
// signup
router.post('/signup', async (req, res) => {
    const { firstname, lastname, email, phone_number, country, region, city, subcity, password } = req.body;
    console.log(req.body);
    try {
        const exits_user = await user.findOne({ where: { email } });
        if (exits_user) {
            return res.status(400).json({ error: "Email already exists" });
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const new_user = await user.create({
            firstname,
            lastname,
            email,
            phone_number,
            country,
            region,
            city,
            subcity,
            password: hashedpassword
        });
        res.status(201).json({ message: 'User created successfully', new_user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// login 
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const Instat_user = await user.findOne({ where: { email } });
        if (!Instat_user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, Instat_user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: Instat_user.id, email: Instat_user.email }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });
        res.status(200).json({ message: "Login successful", token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});
export default router;
