import bcrypt from "bcrypt";
import Register from "../models/registerSchema.js";
async function register(req, res) {
  try {
    const { name, email, userType, password } = req.body;
    const registerUser = new Register({
      name: name,
      email: email,
      userType: userType,
      password: await bcrypt.hash(password, 10),
    });
    await registerUser.save();
    res.json({ status: 201, message: "user created successfully" });
  } catch (error) {
    res.json({ "try-catch error": error });
  }
}

async function login(req, res) {
  res.json(req.body);
}
async function forgotPassword(req, res) {
  res.json("forgot api working");
}

export default {
  register,
  login,
  forgotPassword,
};
