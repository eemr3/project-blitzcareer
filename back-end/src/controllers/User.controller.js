const UserService = require('../services/User.service');

const createNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await UserService.createNewUser(name, email, password);

  return res.status(201).json(user);
};

const getAllUsers = async (req, res) => {
  const users = await UserService.getAllUsers();

  return res.status(200).json(users);
};

module.exports = {
  createNewUser,
  getAllUsers,
};
