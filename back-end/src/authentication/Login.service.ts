const bcrpt = require('bcryptjs');
const { createToken } = require('../auth/authToken');
const { User } = require('../database/models');
const errorBase = require('../util/errorBase');

const loginUser = async (emailUser, pwdUser) => {
  const user = await User.findOne({
    where: { email: emailUser },
  });

  if (!user) throw errorBase(404, 'Incorrect email or password');
  
  const pwdDecripted = await bcrpt.compare(pwdUser, user.password);

  if (!pwdDecripted || null) {
    throw errorBase(401, 'Incorrect email or password');
  }

  const { id, name, email } = user;
  const token = createToken({ id, name, email });
  return { token };
};

module.exports = {
  loginUser,
};
