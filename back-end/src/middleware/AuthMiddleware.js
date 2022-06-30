const { decodeToken } = require('../auth/authToken');

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  const token = authorization;

  const decoded = decodeToken(token);
  
  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  
  req.data = decoded;

  next();
};

module.exports = authMiddleware;
