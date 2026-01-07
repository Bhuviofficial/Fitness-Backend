import Nutrition from "../models/Nutrition.js";
import Exercise from "../models/Exercise.js";

export const getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;

    const nutrition = await Nutrition.find({ user: userId });
    const exercises = await Exercise.find({ user: userId });

    const totalCalories = nutrition.reduce(
      (sum, item) => sum + item.calories,
      0
    );

    const totalWorkouts = exercises.length;

    res.status(200).json({
      success: true,
      totalCalories,
      totalWorkouts,
      mealsLogged: nutrition.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load dashboard data",
    });
  }
};
