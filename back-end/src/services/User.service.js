const bcryt = require('bcryptjs');
const { createToken } = require('../auth/authToken');
const { User, ToDo } = require('../database/models');

const createNewUser = async (nameUser, emailUser, pwdUser) => {
  const pwd = await bcryt.hash(pwdUser, 10);

  const user = await User.create({
    name: nameUser,
    email: emailUser,
    password: pwd,
  });

  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const getByIdUser = async (id) => {
  const user = await User.findOne({
    where: id,
    include: [{ model: ToDo, as: 'toDos' }],
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
