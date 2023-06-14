const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;
const jwtConfig = {
  expiresIn: '7d',
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
  return { type: 200, data: result };
};

const getUser = async (id) => {
  const result = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!result) return { type: 404, data: { message: 'User does not exist' } };
  return { type: 200, data: result };
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
  return { type: 204, data: '' };
};

module.exports = {
  login,
  insertUser,
  getAllUsers,
  getUser,
  deleteUser,
};