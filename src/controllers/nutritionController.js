import Nutrition from "../models/Nutrition.js";

export const addNutrition = async (req, res) => {
  try {
    const nutrition = await Nutrition.create({
      user: req.user.id,
      ...req.body,
    });
    res.status(201).json(nutrition);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getNutrition = async (req, res) => {
  try {
    const data = await Nutrition.find({ user: req.user.id });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
