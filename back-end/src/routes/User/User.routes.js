const express = require('express');
const UserController = require('../../controllers/User.controller');

const routes = express.Router();

routes.post('/', UserController.createNewUser);
routes.get('/', UserController.getAllUsers);

module.exports = routes;
