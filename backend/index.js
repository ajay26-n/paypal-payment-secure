import express from 'express';
import cors from 'cors';
import authRoutes from './src/routers/authRouter.js';
import connectDb from './src/config/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
    res.json({ success: "true", message: "Server is On" });
});

// STARTUP LOGIC: Wait for DB, then start Server
const startServer = async () => {
    try {
        // 1. Attempt to connect to the Database
        await connectDb();
        console.log('✅ Database connection established.');

        // 2. Only start listening once the DB is ready
        app.listen(PORT, () => {
            console.log(`🚀 Server is live at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Failed to start server due to DB connection error:', error.message);
        process.exit(1); // Exit the process if we can't connect
    }
};

startServer();
