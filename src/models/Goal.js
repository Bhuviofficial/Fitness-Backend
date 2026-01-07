import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: String,
    target: Number,
    unit: String,
  },
  { timestamps: true }
);

export default mongoose.model("Goal", goalSchema);
