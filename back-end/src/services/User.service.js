const { User } = require('../database/models');

const createNewUser = async (name, email, password) => {
  const user = await User.create({ name, email, password });

  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const getByIdUser = async (id) => {
  const user = await User.findOne({
    where: id,
    attributes: { exclude: ['password'] },
  });

  if (!user) throw new Error('User not foud');

  return user;
};

module.exports = {
  createNewUser,
  getAllUsers,
  getByIdUser,
};
