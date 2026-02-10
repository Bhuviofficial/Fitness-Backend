import Nutrition from "../models/Nutrition.js";
import Exercise from "../models/Exercise.js";

/* ===============================
   DASHBOARD DATA (AUTO CALCULATED)
================================ */
export const getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;

    /* ---------- TODAY RANGE ---------- */
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    /* ---------- CALORIES EATEN TODAY ---------- */
    const mealsToday = await Nutrition.find({
      user: userId,
      createdAt: { $gte: startOfDay, $lte: endOfDay },
    });

    const caloriesToday = mealsToday.reduce(
      (sum, meal) => sum + meal.calories,
      0
    );

    /* ---------- EXERCISE TODAY ---------- */
    const exercisesToday = await Exercise.find({
      user: userId,
      createdAt: { $gte: startOfDay, $lte: endOfDay },
    });

    const caloriesBurnedToday = exercisesToday.reduce(
      (sum, ex) => sum + ex.caloriesBurned,
      0
    );

    const workoutMinutes = exercisesToday.reduce(
      (sum, ex) => sum + ex.duration,
      0
    );

    /* ---------- WEEKLY DATA ---------- */
    const last7Days = [...Array(7)].map((_, i) => {
      const day = new Date();
      day.setDate(day.getDate() - i);
      day.setHours(0, 0, 0, 0);
      return day;
    }).reverse();

    const weeklyCalories = [];
    const weeklyBurned = [];

    for (let day of last7Days) {
      const nextDay = new Date(day);
      nextDay.setDate(day.getDate() + 1);

      const dayMeals = await Nutrition.find({
        user: userId,
        createdAt: { $gte: day, $lt: nextDay },
      });

      const dayExercises = await Exercise.find({
        user: userId,
        createdAt: { $gte: day, $lt: nextDay },
      });

      weeklyCalories.push(
        dayMeals.reduce((s, m) => s + m.calories, 0)
      );

      weeklyBurned.push(
        dayExercises.reduce((s, e) => s + e.caloriesBurned, 0)
      );
    }

    res.json({
      stats: {
        caloriesToday,
        caloriesBurnedToday,
        workoutMinutes,
      },
      weeklyCalories,
      weeklyBurned,
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ message: "Dashboard fetch failed" });
  }
};
