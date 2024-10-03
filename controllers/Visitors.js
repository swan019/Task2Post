import express from 'express';
import { getClientIp } from '@supercharge/request-ip';
import Visitor from '../models/Visitors.js'; 
import User from '../models/User.js';
const router = express.Router();

router.get('/', async (req, res) => {
    const ip = getClientIp(req); 
    
    
    console.log(`Visitor's IP: ${ip}`);
    
    try {
        
        const existingVisitor = await Visitor.findOne({ ip });
  
        if (!existingVisitor) {
            
            const newVisitor = new Visitor({ ip });
            await newVisitor.save();
        }
  
       
        const totalVisitors = await Visitor.countDocuments();
        const totalActivUsers = await User.countDocuments();
        
        
        res.json({ totalVisitors, totalActivUsers }); // Respond with JSON
    } catch (error) {
        console.error('Error fetching visitor data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
  
export default router;
