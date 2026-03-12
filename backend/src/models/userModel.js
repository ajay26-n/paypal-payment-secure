// models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures no two users can register with the same email
        lowercase: true,
        trim: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { 
    timestamps: true // Automatically adds 'createdAt' and 'updatedAt' timestamps
});

// Create the model from the schema
const User = mongoose.model('User', userSchema);

export default User;