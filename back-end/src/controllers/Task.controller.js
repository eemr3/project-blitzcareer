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

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskService.getTaskById(Number(id));

    return res.status(200).json(task);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
};
