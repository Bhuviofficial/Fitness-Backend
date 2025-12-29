import express from "express";
import protect from "../middleware/authMiddleware.js";
import { getDashboardData } from "../controllers/dashboardController.js";
import FitnessData from "../models/FitnessData.js";

const router = express.Router();

router.get("/", protect, getDashboardData);

router.post("/add", protect, async (req, res) => {
  const { date, steps, calories, water, workout } = req.body;

  const data = await FitnessData.create({
    userId: req.user.id,
    date,
    steps,
    calories,
    water,
    workout
  });

  res.json(data);
});

export default router;
