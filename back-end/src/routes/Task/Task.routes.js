const express = require('express');
const TaskController = require('../../controllers/Task.controller');
const authMiddleware = require('../../middleware/AuthMiddleware');
const { taskMiddleware } = require('../../middleware/TaskMiddleware');

const routes = express.Router();

routes.post('/', authMiddleware, taskMiddleware, TaskController.createTask);

module.exports = routes;
