const express = require('express');
const TaskController = require('../../controllers/Task.controller');
const authMiddleware = require('../../middleware/AuthMiddleware');
const { taskMiddleware } = require('../../middleware/TaskMiddleware');

const routes = express.Router();

routes.get('/:id', authMiddleware, TaskController.getTaskById);
routes.get('/', authMiddleware, TaskController.getAllTasks);
routes.post('/', authMiddleware, taskMiddleware, TaskController.createTask);

module.exports = routes;
