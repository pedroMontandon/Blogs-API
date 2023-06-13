const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  return next();
};

module.exports = {
  validateToken,
};