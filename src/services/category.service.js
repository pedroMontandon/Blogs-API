const { Category } = require('../models');

const insertCategory = async (name) => {
  const result = await Category.create({ name });
  console.log(result);

  return { type: 201, data: result };
};

module.exports = {
  insertCategory,
};