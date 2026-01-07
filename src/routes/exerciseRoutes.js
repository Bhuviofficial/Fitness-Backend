import express from "express";
import { addExercise, getExercises } from "../controllers/exerciseController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addExercise);
router.get("/", protect, getExercises);

export default router;
