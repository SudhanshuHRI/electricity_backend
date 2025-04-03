import express from "express";
import authController from "../controller/authController.js";
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);

export default router;
