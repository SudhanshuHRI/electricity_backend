import Register from "../models/authSchema/registerSchema.js";
async function register(req, res) {
  try {
    console.log(req.body)
    const registerUser = new Register(req.body);
    await registerUser.save();
    res.json({ message: "user created successfully" });
  } catch (error) {
    res.json({"try-catch error": error});
  }
}

async function login(req, res) {
  res.json("login api working");
}
async function forgotPassword(req, res) {
  res.json("forgot api working");
}

export default {
  register,
  login,
  forgotPassword,
};
