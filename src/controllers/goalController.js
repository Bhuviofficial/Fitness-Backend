import Goal from "../models/Goal.js";

export const createGoal = async (req, res) => {
  try {
    const { title, target } = req.body;

    if (!title || !target) {
      return res.status(400).json({ message: "All fields required" });
    }

    const goal = await Goal.create({
      user: req.user._id,
      title,
      target,
      progress: 0
    });

    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
