import Goal from "../models/Goal.js";

/**
 * @desc    Create a new goal (user-specific)
 * @route   POST /api/goals
 * @access  Private
 */
export const createGoal = async (req, res) => {
  try {
    const { name, target, unit } = req.body;

    // Basic validation
    if (!name || !target || !unit) {
      return res.status(400).json({
        message: "All fields (name, target, unit) are required",
      });
    }

    const goal = await Goal.create({
      user: req.user.id, // comes from auth middleware
      name,
      target,
      unit,
    });

    res.status(201).json({
      message: "Goal created successfully",
      goal,
    });
  } catch (error) {
    console.error("Create Goal Error:", error);
    res.status(500).json({
      message: "Goal creation failed",
    });
  }
};

/**
 * @desc    Get all goals of logged-in user
 * @route   GET /api/goals
 * @access  Private
 */
export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.status(200).json(goals);
  } catch (error) {
    console.error("Get Goals Error:", error);
    res.status(500).json({
      message: "Failed to fetch goals",
    });
  }
};
