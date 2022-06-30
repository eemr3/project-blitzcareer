const { ToDo } = require('../database/models');
const errorBase = require('../util/errorBase');

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
    throw errorBase(404, 'Task not found');
  }

  return task;
};

const updateTask = async ({ title, description, status, id }) => {
  const idTask = Number(id);
  const taskExist = await getTaskById(idTask);
  if (!taskExist) {
    throw errorBase(404, 'Task not found');
  }
  const taskUpdated = await ToDo.update(
    { title, description, status },
    { where: { id: idTask } },
  );

  if (taskUpdated === 0) {
    throw errorBase(403, 'Error updated');
  }
  const task = await getTaskById(idTask);
  return task;
};

const destroyTask = async (id) => {
  const taskExist = await getTaskById(id);
  if (!taskExist) {
    throw errorBase(404, 'Task not found');
  }

  const deleteTask = await ToDo.destroy({ where: { id } });
  if (deleteTask === 0) {
    throw errorBase(403, 'Error deleted task');
  }

  return { message: 'Task deleted successfully' };
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  destroyTask,
};
