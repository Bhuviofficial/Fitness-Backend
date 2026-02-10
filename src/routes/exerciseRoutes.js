import express from "express";
import {
  createExercise,
  getExercises,
} from "../controllers/exerciseController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

/* USER MUST BE LOGGED IN */
router.post("/", protect, createExercise);
router.get("/", protect, getExercises);

export default router;
