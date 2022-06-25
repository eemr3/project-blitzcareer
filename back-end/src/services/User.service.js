const { User } = require('../database/models');

const createNewUser = async (name, email, password) => {
  const user = await User.create({ name, email, password });

  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

module.exports = {
  createNewUser,
  getAllUsers,
};
