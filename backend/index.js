import express from 'express';
import cors from 'cors';
import authRoutes from './src/routers/authRouter.js';
import connectDb from './src/config/db.js';

const app = express();
const PORT = process.env.PORT || 5000;
connectDb();

// CORS Configuration to allow only the React frontend
const corsOptions = {
    origin: 'http://localhost:5173', // Change this if your React app runs on a different port
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true // Set to true if you plan to send cookies or authorization headers
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.get("/",(req, res)=>{
    res.json({success : "true", message : "Server is On"});
})
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});
