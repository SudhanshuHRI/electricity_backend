import bcrypt from "bcrypt";
import Register from "../models/registerSchema.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

async function register(req, res) {
  try {
    const { name, email, userType, password } = req.body;
    const registerUser = new Register({
      name: name,
      email: email.toLowerCase(),
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
  const { email, password: plainPassword } = req.body;

  const user = await Register.findOne({ email: email.toLowerCase() });

  if (user) {
    const { password: hashedPassword } = user;

    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);

    if (isMatch) {
      const jwttoken = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.JWT_SECREAT_KEY,
        { expiresIn: "1h" }
      );

      res.cookie("jwttoken", jwttoken, {
        httpOnly: true, // Prevent JavaScript access (XSS protection)
        secure: false, // Use HTTPS in production
        sameSite: "Strict", // Prevent CSRF attacks
        maxAge: 3600000, // 1 hour expiration
      });

      res.json({ status: 200, message: "Login Successfull!" });
    } else {
      res.json({ status: 401, message: "Wrong Password!" });
    }
  } else {
    res.json({ status: 404, message: "No user found!" });
  }
}

async function forgotPassword(req, res) {
  
  //   📝 Steps to Implement Forgot Password
  // 1️⃣ User requests a password reset → Enter email.
  // 2️⃣ Generate a secure reset token → Save it in the database.
  // 3️⃣ Send a reset link via email (with the token).
  // 4️⃣ User clicks the link → Enters new password.
  // 5️⃣ Hash the new password using bcrypt and save it.

  const { email } = req.body;

  const user = await Register.findOne({ email: email.toLowerCase() });

  console.log(user);

  if (!user) return res.json({ status: 404, message: "User not found!" });

  res.json("forgot api working");
}

export default {
  register,
  login,
  forgotPassword,
};
