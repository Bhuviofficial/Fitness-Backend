import Goal from "../models/Goal.js";

/* ==============================
   GET USER GOALS
================================ */
export const getGoals = async (req, res) => {
  try {
    const goal = await Goal.findOne({ user: req.user.id });

    res.status(200).json(goal || {});
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch goals" });
  }
};

/* ==============================
   CREATE / UPDATE GOALS
================================ */
export const setGoals = async (req, res) => {
  try {
    const {
      dailyCalories,
      dailySteps,
      weeklyWorkouts,
      waterTarget
    } = req.body;

    let goal = await Goal.findOne({ user: req.user.id });

    if (goal) {
      goal.dailyCalories = dailyCalories;
      goal.dailySteps = dailySteps;
      goal.weeklyWorkouts = weeklyWorkouts;
      goal.waterTarget = waterTarget;
      await goal.save();

      return res.status(200).json(goal);
    }

    const newGoal = await Goal.create({
      user: req.user.id,
      dailyCalories,
      dailySteps,
      weeklyWorkouts,
      waterTarget
    });

    res.status(201).json(newGoal);
  } catch (error) {
    res.status(500).json({ message: "Failed to save goals" });
  }
};
