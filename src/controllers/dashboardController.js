import Nutrition from "../models/Nutrition.js";
import Exercise from "../models/Exercise.js";

export const getDashboard = async (req, res) => {
  const today = new Date().setHours(0,0,0,0);

  const meals = await Nutrition.find({ user: req.user.id, date: { $gte: today } });
  const exercises = await Exercise.find({ user: req.user.id, date: { $gte: today } });

  const caloriesToday = meals.reduce((a, b) => a + b.calories, 0);
  const workout = exercises.reduce((a, b) => a + b.duration, 0);

  res.json({
    stats: {
      caloriesToday,
      workout,
      water: 2.5,
      stepsToday: workout * 100,
    },
  });
};
