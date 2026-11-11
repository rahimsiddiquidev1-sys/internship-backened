const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// simple profile route, sirf logged in user ke liye
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "This is your profile",
    user: req.user,
  });
});

// sirf admin ke liye route
router.get("/admin/dashboard", protect, authorize("admin"), (req, res) => {
  res.json({
    message: "Welcome admin, this is the dashboard",
  });
});

module.exports = router;