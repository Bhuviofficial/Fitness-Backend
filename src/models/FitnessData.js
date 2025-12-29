import mongoose from "mongoose";

const fitnessSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    date: {
      type: String,
      required: true
    },
    steps: Number,
    calories: Number,
    water: Number,
    workout: Number
  },
  { timestamps: true }
);

export default mongoose.model("FitnessData", fitnessSchema);
