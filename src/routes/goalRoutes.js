import express from "express";
import { setGoal, getGoal } from "../controllers/goalController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", protect, setGoal);
router.get("/", protect, getGoal);
export default router;
