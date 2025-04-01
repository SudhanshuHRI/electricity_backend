import mongoose from "mongoose";

const MONGO_URI = process.env.ADMIN_DATABASE_URL2 // Replace with your MongoDB URI


const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ MongoDB Connected!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};

export default connectDB;
