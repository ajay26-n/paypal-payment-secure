import mongoose from "mongoose";
import "dotenv/config";

async function connectDb(){
    try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongo db connected successfully");
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
} 

export default connectDb;