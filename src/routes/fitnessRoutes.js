import express from "express";
import auth from "../middleware/authMiddleware.js";
import Fitness from "../models/Fitness.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const data = await Fitness.create({ ...req.body, user: req.user });
  res.json(data);
});

router.get("/", auth, async (req, res) => {
  const data = await Fitness.find({ user: req.user });
  res.json(data);
});

export default router;
