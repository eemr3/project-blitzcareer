const bcrpt = require('bcryptjs');
const { createToken } = require('../auth/authToken');
const { User } = require('../database/models');

const loginUser = async (emailUser, pwdUser) => {
  const user = await User.findOne({
    where: { email: emailUser },
  });
  console.log(user);
  const pwdDecripted = await bcrpt.compare(pwdUser, user.password);

  if (!pwdDecripted || null) {
    throw new Error('Incorrect email or password');
  }

  const { id, name, email } = user;
  const token = createToken({ id, name, email });
  return { token };
};

module.exports = {
  loginUser,
};
