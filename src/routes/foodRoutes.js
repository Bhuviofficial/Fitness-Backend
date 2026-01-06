import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addFood, getFoodLogs } from "../controllers/foodController.js";

const router = express.Router();

router.post("/", authMiddleware, addFood);
router.get("/", authMiddleware, getFoodLogs);

export default router;
