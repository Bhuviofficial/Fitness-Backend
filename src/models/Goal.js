import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    dailyCalories: {
      type: Number,
      default: 0
    },
    dailySteps: {
      type: Number,
      default: 0
    },
    weeklyWorkouts: {
      type: Number,
      default: 0
    },
    waterTarget: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

export default mongoose.model("Goal", goalSchema);
