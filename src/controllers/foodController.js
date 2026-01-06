import FoodLog from "../models/FoodLog.js";

export const addFood = async (req, res) => {
  const food = await FoodLog.create({
    userId: req.userId,
    ...req.body
  });
  res.status(201).json(food);
};

export const getFoodLogs = async (req, res) => {
  const foods = await FoodLog.find({ userId: req.userId });
  res.json(foods);
};
