import Goal from "../models/Goal.js";

export const setGoal = async (req, res) => {
  const goal = await Goal.findOneAndUpdate(
    { user: req.user.id },
    req.body,
    { upsert: true, new: true }
  );
  res.json(goal);
};

export const getGoal = async (req, res) => {
  const goal = await Goal.findOne({ user: req.user.id });
  res.json(goal);
};
