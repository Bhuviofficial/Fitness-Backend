import express from "express";
import { addNutrition, getNutrition } from "../controllers/nutritionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes
router.post("/", authMiddleware, addNutrition);
router.get("/", authMiddleware, getNutrition);

export default router;
