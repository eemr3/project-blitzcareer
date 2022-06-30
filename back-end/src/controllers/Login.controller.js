const LoginService = require('../services/Login.service');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await LoginService.loginUser(email, password);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
};
