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

const updateTask = async ({ title, description, status, id }) => {
  const idTask = Number(id);
  const taskExist = await getTaskById(idTask);
  if (!taskExist) {
    throw new Error('Task not found');
  }
  const taskUpdated = await ToDo.update(
    { title, description, status },
    { where: { id: idTask } },
  );

  if (taskUpdated === 0) {
    throw new Error('Error updated');
  }
  const task = await getTaskById(idTask);
  return task;
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
};
