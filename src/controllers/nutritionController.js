import Nutrition from "../models/Nutrition.js";

export const addMeal = async (req, res) => {
  const meal = await Nutrition.create({ ...req.body, user: req.user.id });
  res.json(meal);
};

export const getTodayMeals = async (req, res) => {
  const start = new Date().setHours(0,0,0,0);
  const meals = await Nutrition.find({
    user: req.user.id,
    date: { $gte: start }
  });
  res.json(meals);
};
