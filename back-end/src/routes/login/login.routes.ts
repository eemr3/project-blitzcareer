import { Router } from 'express';
const LoginController = require('../../controllers/Login.controller');

const routes = Router();

routes.post('/', LoginController.loginUser);

export { routes };
