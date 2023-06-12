const { categoryService } = require('../services');

const insertCategory = async (req, res) => {
  const { name } = req.body;
  const { type, data } = await categoryService.insertCategory(name);
  return res.status(type).json(data);
};

module.exports = {
  insertCategory,
};