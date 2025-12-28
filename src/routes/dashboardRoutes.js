import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  res.json({
    name: req.user.name,
    calories: 520,
    workouts: 2,
    steps: 7800,
  });
});

export default router;
