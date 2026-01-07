import Exercise from "../models/Exercise.js";

export const addExercise = async (req, res) => {
  const exercise = await Exercise.create({ ...req.body, user: req.user.id });
  res.json(exercise);
};

export const getTodayExercises = async (req, res) => {
  const start = new Date().setHours(0,0,0,0);
  const exercises = await Exercise.find({
    user: req.user.id,
    date: { $gte: start }
  });
  res.json(exercises);
};
