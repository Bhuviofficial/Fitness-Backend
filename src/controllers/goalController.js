import Goal from "../models/Goal.js";

// @desc   Get logged-in user's goals
// @route  GET /api/goals
// @access Private
export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user._id });
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Create new goal
// @route  POST /api/goals
// @access Private
export const setGoals = async (req, res) => {
  try {
    const { title, target } = req.body;

    if (!title || !target) {
      return res.status(400).json({ message: "Title and target are required" });
    }

    const goal = await Goal.create({
      user: req.user._id,
      title,
      target,
      progress: 0,
    });

    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
