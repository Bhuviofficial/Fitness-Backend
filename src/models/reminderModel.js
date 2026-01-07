import mongoose from "mongoose";

const reminderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    time: {
      type: String, 
      required: true,
    },
    type: {
      type: String, 
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Reminder = mongoose.model("Reminder", reminderSchema);

export default Reminder;
