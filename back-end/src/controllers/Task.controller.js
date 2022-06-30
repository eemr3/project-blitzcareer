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
    console.log(error);
    return res.status(error.status).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const task = await TaskService.updateTask({
      title,
      description,
      status,
      id,
    });

    return res.status(200).json(task);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const destroyTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskService.destroyTask(Number(id));

    res.status(200).json(result);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  destroyTask,
};
