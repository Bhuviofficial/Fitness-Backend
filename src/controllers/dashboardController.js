export const getDashboardData = async (req, res) => {
  try {
    res.json({
      steps: [6000, 7200, 8000, 7500, 9000, 10000, 8500],
      calories: [400, 480, 520, 500, 600, 700, 650],
      stats: {
        stepsToday: 7500,
        caloriesToday: 520,
        water: 2.5,
        workout: 45
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Dashboard fetch failed" });
  }
};
