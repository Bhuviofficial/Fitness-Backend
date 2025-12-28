import Goal from "../models/Goal.js";

export const addGoal = async (req, res) => {
  const goal = await Goal.create({
    user: req.user.id,
    ...req.body,
  });
  res.status(201).json(goal);
};

export const getGoals = async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.json(goals);
};

export const updateGoal = async (req, res) => {
  const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(goal);
};
