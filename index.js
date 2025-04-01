import express from "express";
import "dotenv/config";

import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT;


app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/", (req, res) => {
  res.json({ message: "Welcome to Electricity Back-end" });
});

app.listen(port, () => {
  console.log("port is running on 3500");
});
