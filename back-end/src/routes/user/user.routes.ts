import { Router } from 'express';
const UserController = require('../../controllers/User.controller');
const authMiddleware = require('../../middleware/AuthMiddleware');

const routes = Router();

routes.get('/userid', authMiddleware, UserController.getByIdUser);
routes.get('/', authMiddleware, UserController.getAllUsers);
routes.post('/', UserController.createNewUser);

export { routes };
