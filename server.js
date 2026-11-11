require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json()); 
app.use(express.static("public"));
// simple health check route
app.get("/", (req, res) => {
  res.send("Auth service is running");
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.use(cors({ origin: "https://auth-proje.netlify.app/" }));

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});