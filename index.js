import express from "express";
import testRoute from "./routes/testRoute.js";

const app = express();
const port = 3500;

app.use("/test", testRoute);

app.listen(port, () => {
  console.log("port is running on 3500");
});
