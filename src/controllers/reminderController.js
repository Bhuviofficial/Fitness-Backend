import Reminder from "../models/reminderModel.js";

// ➕ Create Reminder
export const createReminder = async (req, res) => {
  try {
    const { title, time, type } = req.body;

    if (!title || !time || !type) {
      return res.status(400).json({ message: "All fields required" });
    }

    const reminder = await Reminder.create({
      user: req.user.id,
      title,
      time,
      type,
    });

    res.status(201).json(reminder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📄 Get User Reminders
export const getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find({ user: req.user.id });
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❌ Delete Reminder
export const deleteReminder = async (req, res) => {
  try {
    const reminder = await Reminder.findById(req.params.id);

    if (!reminder) {
      return res.status(404).json({ message: "Reminder not found" });
    }

    if (reminder.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await reminder.deleteOne();
    res.json({ message: "Reminder removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
