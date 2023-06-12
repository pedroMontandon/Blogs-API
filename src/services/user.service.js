const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;
const jwtConfig = {
  expiresIn: '1h',
};

const generateToken = (user) => (jwt.sign(user, JWT_SECRET, jwtConfig));

const login = async (email, password) => {
  const successfulLogin = await User.findOne({ where: { email, password } });
  if (successfulLogin) return { type: 200, data: { token: generateToken({ email, password }) } };
  return { type: 400, data: { message: 'Invalid fields' } };
};

module.exports = {
  login,
};