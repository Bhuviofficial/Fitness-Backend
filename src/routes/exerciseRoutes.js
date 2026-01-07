import express from "express";
import { addExercise, getTodayExercises } from "../controllers/exerciseController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", protect, addExercise);
router.get("/today", protect, getTodayExercises);
export default router;
