import { Router } from 'express';
const TaskController = require('../../controllers/Task.controller');
const authMiddleware = require('../../middleware/AuthMiddleware');
const { taskMiddleware } = require('../../middleware/TaskMiddleware');

const routes = Router();

routes.put('/:id', authMiddleware, taskMiddleware, TaskController.updateTask);
routes.delete('/:id', authMiddleware, TaskController.destroyTask);
routes.get('/:id', authMiddleware, TaskController.getTaskById);
routes.get('/', authMiddleware, TaskController.getAllTasks);
routes.post('/', authMiddleware, taskMiddleware, TaskController.createTask);

export { routes };
