import Goal from "../models/Goal.js";

/* CREATE GOAL */
export const createGoal = async (req, res) => {
  try {
    const goal = await Goal.create({
      user: req.user.id,
      name: req.body.name,
      target: req.body.target,
      unit: req.body.unit,
    });

    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ message: "Goal creation failed" });
  }
};

/* GET USER GOALS */
export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user.id });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch goals" });
  }
};
