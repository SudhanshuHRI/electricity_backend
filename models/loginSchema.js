import mongoose from "mongoose";

// Define the schema
const loginSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, default: 18 },
  },
  { timestamps: true }
); // Adds createdAt & updatedAt fields automatically

// Create and export the model
const login = mongoose.model("loginModel", loginSchema);
export default login;
