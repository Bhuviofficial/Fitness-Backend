import Exercise from "../models/Exercise.js";

export const addExercise = async (req, res) => {
  const exercise = await Exercise.create({
    userId: req.userId,
    ...req.body
  });
  res.status(201).json(exercise);
};

export const getExercises = async (req, res) => {
  const exercises = await Exercise.find({ userId: req.userId });
  res.json(exercises);
};
