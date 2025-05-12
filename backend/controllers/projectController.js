const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find().populate("assignedDevs");
  res.json(projects);
};

exports.assignDeveloperToProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  project.assignedDevs.push(req.body.developerId);
  await project.save();
  res.json(project);
};
