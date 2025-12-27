import mongoose from "mongoose";

const fitnessSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  calories: Number,
  steps: Number,
  duration: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Fitness", fitnessSchema);
