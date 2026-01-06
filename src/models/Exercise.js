import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  exerciseName: String,
  duration: Number, // minutes
  caloriesBurned: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Exercise", exerciseSchema);
