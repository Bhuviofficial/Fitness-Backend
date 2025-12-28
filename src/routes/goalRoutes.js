import express from "express";
import { addGoal, getGoals, updateGoal } from "../controllers/goalController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes
router.post("/", authMiddleware, addGoal);
router.get("/", authMiddleware, getGoals);
router.put("/:id", authMiddleware, updateGoal);

export default router;
