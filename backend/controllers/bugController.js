const Bug = require("../models/Bug");

exports.createBug = async (req, res) => {
  const bug = await Bug.create({ ...req.body, createdBy: req.user.id });
  res.status(201).json(bug);
};

exports.getBugs = async (req, res) => {
  const bugs = await Bug.find()
    .populate("assignedTo project createdBy")
    .lean();
  res.json(bugs);
};

exports.updateBug = async (req, res) => {
  const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bug);
};
