import express from "express";
import { addMeal, getMeals } from "../controllers/nutritionController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

/* PROTECTED ROUTES */
router.post("/", protect, addMeal);
router.get("/", protect, getMeals);

export default router;
