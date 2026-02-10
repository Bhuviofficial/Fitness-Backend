import Exercise from "../models/Exercise.js";

/* ===============================
   CREATE EXERCISE (USER SPECIFIC)
================================ */
export const createExercise = async (req, res) => {
  try {
    const { name, duration, calories } = req.body;

    if (!name || !duration || !calories) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const exercise = await Exercise.create({
      user: req.user.id,   // 🔐 VERY IMPORTANT
      name,
      duration,
      calories,
    });

    res.status(201).json({
      message: "Exercise added successfully",
      exercise,
    });
  } catch (error) {
    console.error("Create exercise error:", error);
    res.status(500).json({ message: "Exercise creation failed" });
  }
};

/* ===============================
   GET LOGGED-IN USER EXERCISES
================================ */
export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({
      user: req.user.id,   // 🔐 USER FILTER
    }).sort({ createdAt: -1 });

    res.json(exercises);
  } catch (error) {
    console.error("Fetch exercises error:", error);
    res.status(500).json({ message: "Failed to fetch exercises" });
  }
};
