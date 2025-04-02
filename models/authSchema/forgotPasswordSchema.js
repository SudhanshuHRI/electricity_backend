import mongoose from "mongoose";

// Define the schema
const forgotPasswordSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, default: 18 },
  },
  { timestamps: true }
); // Adds createdAt & updatedAt fields automatically

// Create and export the model
const forgotPassword = mongoose.model("forgotPasswordModel", forgotPasswordSchema);
export default forgotPassword;
