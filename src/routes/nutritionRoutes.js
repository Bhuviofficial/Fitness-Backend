import express from "express";
import { addMeal, getTodayMeals } from "../controllers/nutritionController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", protect, addMeal);
router.get("/today", protect, getTodayMeals);
export default router;
