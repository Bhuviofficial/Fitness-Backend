import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";

// Routes
import authRoutes from "./src/routes/authRoutes.js";
import dashboardRoutes from "./src/routes/dashboardRoutes.js";
import nutritionRoutes from "./src/routes/nutritionRoutes.js";
import goalRoutes from "./src/routes/goalRoutes.js";
import exerciseRoutes from "./src/routes/exerciseRoutes.js";


dotenv.config();

// Connect MongoDB
connectDB();

const app = express();
// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/nutrition", nutritionRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/exercises", exerciseRoutes);
// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Health & Fitness API running 🚀"
  });
});
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found"
  });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
