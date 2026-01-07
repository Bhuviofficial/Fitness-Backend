import express from "express";
import { getGoals, setGoals } from "../controllers/goalController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all goals for logged-in user
router.get("/", protect, getGoals);

// Create new goal
router.post("/", protect, setGoals);

export default router;
