const { userService, blogPostService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { type, data } = await userService.login(email, password);
  return res.status(type).json(data);
};

const insertUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, data } = await userService.insertUser(displayName, email, password, image);
  return res.status(type).json(data);
};

const getAllUsers = async (_req, res) => {
  const { type, data } = await userService.getAllUsers();
  return res.status(type).json(data);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const { type, data } = await userService.getUser(id);
  return res.status(type).json(data);
};

const deleteUser = async (req, res) => {
  const token = req.headers.authorization;
  const id = await blogPostService.findByToken(token);
  const { type, data } = await userService.deleteUser(id);
  return res.status(type).json(data);
};

module.exports = {
  login,
  insertUser,
  getAllUsers,
  getUser,
  deleteUser,
};