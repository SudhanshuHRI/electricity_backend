import express from "express";
import authController from "../controller/authController.js";
const router = express.Router();

router.post("/register", authController.register);
router.get("/login", authController.login);
router.get("/forgotPassword", authController.forgotPassword);

export default router;
