import { authDB } from "../helpers/db.js";
import mongoose from "mongoose";
// Define the schema
const registerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, required: true },
  },
  { timestamps: true }
); // Adds createdAt & updatedAt fields automatically

// Create and export the model
const Register = authDB.model("RegisterModel", registerSchema, "users");
export default Register;
