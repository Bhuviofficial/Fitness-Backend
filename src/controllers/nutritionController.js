import Nutrition from "../models/Nutrition.js";

/* ===============================
   ADD MEAL (USER SPECIFIC)
================================ */
export const addMeal = async (req, res) => {
  try {
    const { mealType, foodName, calories, protein, carbs, fats } = req.body;

    if (!mealType || !foodName || !calories) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const meal = await Nutrition.create({
      user: req.user.id, // 🔐 USER LINK
      mealType,
      foodName,
      calories,
      protein,
      carbs,
      fats,
    });

    res.status(201).json({
      message: "Meal added successfully",
      meal,
    });
  } catch (error) {
    console.error("Add meal error:", error);
    res.status(500).json({ message: "Failed to add meal" });
  }
};

/* ===============================
   GET USER MEALS
================================ */
export const getMeals = async (req, res) => {
  try {
    const meals = await Nutrition.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(meals);
  } catch (error) {
    console.error("Get meals error:", error);
    res.status(500).json({ message: "Failed to fetch meals" });
  }
};
