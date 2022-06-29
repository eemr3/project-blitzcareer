const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.TOKEN_SECRET;

const createToken = (user) => {
  const token = jwt.sign({ user }, JWT_SECRET, {
    expiresIn: '30d',
    algorithm: 'HS256',
  });

  return token;
};

const decodeToken = (token) => {
  try {
    const decoder = jwt.verify(token, JWT_SECRET);
    return decoder;
  } catch (error) {
    return false;
  }
};

module.exports = {
  createToken,
  decodeToken,
};
