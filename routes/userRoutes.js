import express from "express";
import userController from "../controller/userController.js"
const router = express.Router()

router.get("/",userController.base)

export default router;