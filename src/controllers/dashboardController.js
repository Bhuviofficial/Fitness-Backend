import FitnessData from "../models/FitnessData.js";

export const getDashboardData = async (req, res) => {
  try {
    const data = await FitnessData.find({ userId: req.user.id })
      .sort({ date: 1 })
      .limit(7);

    const steps = data.map(d => d.steps);
    const calories = data.map(d => d.calories);

    const today = data[data.length - 1] || {};

    res.json({
      steps,
      calories,
      stats: {
        stepsToday: today.steps || 0,
        caloriesToday: today.calories || 0,
        water: today.water || 0,
        workout: today.workout || 0
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Dashboard fetch failed" });
  }
};
