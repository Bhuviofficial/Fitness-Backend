export const getDashboardData = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      stats: {
        stepsToday: 8450,
        caloriesToday: 520,
        water: 2.5,
        workout: 45,
      },
      weeklySteps: [6200, 7500, 8000, 9000, 8500, 9200, 10000],
      weeklyCalories: [400, 450, 500, 550, 520, 600, 650],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load dashboard data",
    });
  }
};
