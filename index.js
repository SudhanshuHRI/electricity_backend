import express from "express";
import "dotenv/config";
import connectDB from "./helpers/db.js"

import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const port = process.env.PORT;
connectDB()

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/", (req, res) => {
  res.json({ message: "Welcome to Electricity Back-end" });
});

app.listen(port, () => {
  console.log("port is running on 3500");
});
