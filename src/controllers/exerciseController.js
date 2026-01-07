import Exercise from "../models/Exercise.js";

export const addExercise = async (req, res) => {
  const exercise = await Exercise.create({
    user: req.user.id,
    name: req.body.name,
    duration: req.body.duration,
    calories: req.body.calories,
  });

  res.status(201).json(exercise);
};

export const getExercises = async (req, res) => {
  const exercises = await Exercise.find({ user: req.user.id });
  res.json(exercises);
};
