import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    target: String,
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);

export default mongoose.model("Goal", goalSchema);
