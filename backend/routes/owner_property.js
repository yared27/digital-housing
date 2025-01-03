import express from 'express';
import multer from "multer";
import path from "path"; 
const router = express.Router();
import { user, properties } from '../models/User.js';
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/');
    },
    filename:function(req,file, cb){
        cb(null,Date.now()+path.extname(file.originalname));
    }
})
const upload =multer({storage:storage});

router.post('/owner_property', upload.array('images', 5), async (req, res) => {
    const { type, city, cost, contact } = req.body;
    console.log(req.files);

    const imageUrls = req.files.map(file => `/uploads/${file.filename}`); // Save URLs for uploaded images

    try {
        const property = await properties.create({
            type,
            city,
            cost,
            contact,
            imageUrl: imageUrls.join(','), // Store multiple URLs as a comma-separated string
        });

        res.status(201).json(property); // Send back the created property
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to create information" });
    }
});

export default router;
