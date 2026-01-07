import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: String,
    duration: Number,
    calories: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Exercise", exerciseSchema);
