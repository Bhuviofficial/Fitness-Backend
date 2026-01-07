import mongoose from "mongoose";

const nutritionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  meal: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fats: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Nutrition", nutritionSchema);
