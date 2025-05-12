const express = require("express");
const { createProject, getProjects, assignDeveloperToProject } = require("../controllers/projectController");
const authMiddleware = require("../middlewares/authMiddleware"); // Ensure the correct file name and path
const roleMiddleware = require("../middlewares/roleMiddleware"); // Ensure the correct file name and path
const router = express.Router();

// Admins can create projects and assign developers
router.post("/", authMiddleware, roleMiddleware(["Admin"]), createProject);
router.get("/", authMiddleware, getProjects);

// Admins can assign developers to projects
router.put("/:id/assign", authMiddleware, roleMiddleware(["Admin"]), assignDeveloperToProject);

module.exports = router;
