import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: String,
  duration: Number,
  caloriesBurned: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Exercise", exerciseSchema);
