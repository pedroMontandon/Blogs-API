const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;
const jwtConfig = {
  expiresIn: '1h',
};

const generateToken = (user) => (jwt.sign(user, JWT_SECRET, jwtConfig));

const login = async (email, password) => {
  const successfulLogin = await User.findOne({ where: { email, password } });
  if (successfulLogin) return { type: 200, data: { token: generateToken({ email }) } };
  return { type: 400, data: { message: 'Invalid fields' } };
};

const insertUser = async (displayName, email, password, image) => {
  const verifyEmail = await User.findOne({ where: { email } });
  if (verifyEmail) return { type: 409, data: { message: 'User already registered' } }; 
  
  await User.create({ displayName, email, password, image });
  return { type: 201, data: { token: generateToken({ email }) } };
};

const getAllUsers = async () => {
  const result = await User.findAll({ attributes: { exclude: ['password'] } });
  console.log(result);
  return { type: 200, data: result };
};

module.exports = {
  login,
  insertUser,
  getAllUsers,
};