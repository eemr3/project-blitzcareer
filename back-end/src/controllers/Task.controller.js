const TaskService = require('../services/Task.service');

const createTask = async (req, res) => {
  const { title, description, status } = req.body;
  const { id } = req.data;
  const task = await TaskService.createTask({ title, description, status, id });

  return res.status(201).json(task);
};

const getAllTasks = async (_req, res) => {
  const tasks = await TaskService.getAllTasks();

  return res.status(200).json(tasks);
};

module.exports = {
  createTask,
  getAllTasks,
};
