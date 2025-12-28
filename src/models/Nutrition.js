import mongoose from "mongoose";

const nutritionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    meal: String,
    calories: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Nutrition", nutritionSchema);
