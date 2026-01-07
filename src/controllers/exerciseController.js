import Exercise from "../models/exerciseModel.js";

// ➕ Add Exercise
export const addExercise = async (req, res) => {
  try {
    const { name, duration, caloriesBurned } = req.body;

    if (!name || !duration || !caloriesBurned) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const exercise = await Exercise.create({
      user: req.user.id,
      name,
      duration,
      caloriesBurned,
    });

    res.status(201).json(exercise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📄 Get User Exercises
export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({ user: req.user.id }).sort({
      date: -1,
    });

    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
