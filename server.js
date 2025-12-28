import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";

import authRoutes from "./src/routes/authRoutes.js";
import nutritionRoutes from "./src/routes/nutritionRoutes.js";
import goalRoutes from "./src/routes/goalRoutes.js";
import dashboardRoutes from "./src/routes/dashboardRoutes.js";
import { registerUser } from "./src/controllers/authController.js";


dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/nutrition", nutritionRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/auth/register",authRoutes);
app.use("/api/auth/login",authRoutes);

app.get("/", (req, res) => {
  res.send("Health & Wellness API running");
});

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running")
);
