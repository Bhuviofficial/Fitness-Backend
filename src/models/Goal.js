import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: String,
  target: Number,
  progress: { type: Number, default: 0 },
});

export default mongoose.model("Goal", goalSchema);
