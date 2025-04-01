import mongoose from "mongoose";

// Define the schema
const registerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, default: 18 },
    password:{type:String}
  },
  { timestamps: true }
); // Adds createdAt & updatedAt fields automatically

// Create and export the model
const Register = mongoose.model("RegisterModel", registerSchema,"theaters");
export default Register;
