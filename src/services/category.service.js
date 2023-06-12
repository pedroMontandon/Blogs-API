const { Category } = require('../models');

const insertCategory = async (name) => {
  const result = await Category.create({ name });

  return { type: 201, data: result };
};

const getAllCategories = async () => {
  const result = await Category.findAll();
  return { type: 200, data: result };
};

module.exports = {
  insertCategory,
  getAllCategories,
};