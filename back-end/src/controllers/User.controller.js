const UserService = require('../services/User.service');

const createNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await UserService.createNewUser(name, email, password);

  return res.status(201).json(user);
};

module.exports = {
  createNewUser,
};
