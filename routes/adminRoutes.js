import express from "express";
import adminController from "../controller/adminController.js"
const router = express.Router()

router.get("/",adminController.base)

export default router;