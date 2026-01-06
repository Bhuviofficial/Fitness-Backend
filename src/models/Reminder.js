import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  message: String,
  time: String // "08:00"
});

export default mongoose.model("Reminder", reminderSchema);
