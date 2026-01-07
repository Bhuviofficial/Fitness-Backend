import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    title: {
      type: String,
      required: true
    },
    target: {
      type: Number,
      required: true
    },
    progress: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

export default mongoose.model("Goal", goalSchema);
