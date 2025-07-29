import express from "express";
import "dotenv/config";
// import {connectAdminDB} from "./helpers/db.js"

import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const port = process.env.PORT || 3500;

// Middlewares
app.use(express.json());


// Routes
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/", (req, res) => {
  res.json({ message: "Welcome to Electricity Back-end" });
});


// Server Details
app.listen(port, () => {
  console.log(`port is running on : ${port}`);
});
