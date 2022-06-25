const { User } = require('../database/models');

const createNewUser = async (name, email, password) => {
  const user = await User.create({ name, email, password });

  return user;
};

module.exports = {
  createNewUser,
};
