import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { register } from "../controllers/registerController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/register", register); 

export default router;
