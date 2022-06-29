const { ToDo } = require('../database/models');

const createTask = async ({ title, description, status, id }) => {
  const task = await ToDo.create({ title, description, status, userId: id });

  return task;
};

const getAllTasks = async () => {
  const tasks = await ToDo.findAll();
  return tasks;
};

const getTaskById = async (id) => {
  const task = await ToDo.findOne({ where: id });
  if (!task) {
    throw new Error('Task not found');
  }

  return task;
};
module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
};
