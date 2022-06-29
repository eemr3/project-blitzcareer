const express = require('express');
const UserController = require('../../controllers/User.controller');
const authMiddleware = require('../../middleware/AuthMiddleware');

const routes = express.Router();

routes.get('/:id', authMiddleware, UserController.getByIdUser);
routes.get('/', authMiddleware, UserController.getAllUsers);
routes.post('/', UserController.createNewUser);

module.exports = routes;
