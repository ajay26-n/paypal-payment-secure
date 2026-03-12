// routes/authRoutes.js
import express from 'express';
import User from '../models/userModel.js'; // Import your new Mongoose model

const router = express.Router();

// --- REGISTER ROUTE ---
router.post('/register', async (req, res) => {
    try {
        const { username, email, mobileNumber, password } = req.body;
        
        // 1. Check if user already exists in MongoDB
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // 2. Create new user object (Plain text password for demo purposes)
        const newUser = new User({
            username,
            email,
            mobileNumber,
            password 
        });

        // 3. Save to MongoDB
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ message: 'Server error during registration', error: error.message });
    }
});

// --- LOGIN ROUTE ---
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Find the user by email in MongoDB
        const user = await User.findOne({ email });
        
        // 2. If no user is found
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // 3. Directly compare submitted password with the plain text password in DB
        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // 4. Success
        res.status(200).json({ message: 'Login successful', username: user.username });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: 'Server error during login', error: error.message });
    }
});

export default router;