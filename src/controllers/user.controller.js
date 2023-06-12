const { userService } = require('../services');

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

module.exports = {
  login,
  insertUser,
};