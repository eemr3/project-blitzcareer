const UserService = require('../services/User.service');

const createNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await UserService.createNewUser(name, email, password);

  return res.status(201).json(user);
};

const getAllUsers = async (_req, res) => {
  const users = await UserService.getAllUsers();

  return res.status(200).json(users);
};

const getByIdUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getByIdUser(Number(id));

    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createNewUser,
  getAllUsers,
  getByIdUser,
};
