const express = require("express");
const { createBug, getBugs, updateBug } = require("../controllers/bugController");
const authMiddleware = require("../middlewares/authMiddleware");  // Ensure correct path
const roleMiddleware = require("../middlewares/roleMiddleware");  // Ensure correct path
const router = express.Router();

// Admins and Managers can create bugs
router.post("/", authMiddleware, roleMiddleware(["Admin", "Manager"]), createBug);

// All users can view bugs
router.get("/", authMiddleware, getBugs);

// Only Developers can update bugs
router.put("/:id", authMiddleware, roleMiddleware(["Developer"]), updateBug);

module.exports = router;
