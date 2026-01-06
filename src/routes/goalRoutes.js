import express from "express";
import { getGoals, setGoals } from "../controllers/goalController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getGoals);
router.post("/", protect, setGoals);

export default router;
