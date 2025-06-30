const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config(); // Load environment variables

const app = express();

// ======= Middleware ========
app.use(cors({
  origin: "http://localhost:3000", // React frontend origin
  credentials: true
}));
app.use(express.json()); // Parse incoming JSON
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve uploaded files

// ======= Routes ========
app.use("/api/userC", userRoutes);
app.use("/api/DoctorC", doctorRoutes);
app.use("/api/adminC", adminRoutes);

// ======= Home Route ========
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// ======= MongoDB Connection ========
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/yourDB";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
