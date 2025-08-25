import bcrypt from "bcrypt";
import Register from "../models/registerSchema.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import nodemailer from "nodemailer";

async function register(req, res) {
  try {
    const { name, email, userType, password } = req.body;

    if (name && email && userType && password) {
      const findUser = await Register.findOne({ email: email.toLowerCase() });

      if (findUser) {
        res.json({ status: 400, message: "Email already registered!!" });
      } else {
        const registerUser = new Register({
          name: name,
          email: email.toLowerCase(),
          userType: userType.toLowerCase(),
          password: await bcrypt.hash(password, 10),
        });
        await registerUser.save();
        res.json({ status: 201, message: "user created successfully" });
      }
    } else {
      res.json({
        status: 404,
        message: "name, email, userType, password are required!!",
      });
    }
  } catch (error) {
    res.json({ TryCatchError: error });
  }
}

async function login(req, res) {
  const { email, password: plainPassword } = req.body;

  if (email && plainPassword) {
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
  } else {
    res.json({ status: 404, message: "Email and Password are required!!" });
  }
}

async function forgotPassword(req, res) {

  const { email } = req.body;

  const user = await Register.findOne({ email: email.toLowerCase() });

  console.log("user : ",user);
  // create a password
  // send it to user's email
  // also send it in users database with hashing

  if (!user) {
    return res.json({ status: 404, message: "User not found!" });
  } else {
   
  }
}

export default {
  register,
  login,
  forgotPassword,
};
