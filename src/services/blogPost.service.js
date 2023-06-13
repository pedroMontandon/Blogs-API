const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const config = require('../config/config');
const { BlogPost, User, PostCategory, Category } = require('../models');

const env = process.env.NODE_ENV;
const sequelize = new Sequelize(config[env]);

const findByToken = async (token) => {
  const { email } = jwt.verify(token, JWT_SECRET);
  const { id } = await User.findOne({ where: { email } });
  return id;
};

const verifyCategories = async (categoryIds) => {
  const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
  if (Number(count) !== categoryIds.length) return null;
  return count;
};

const post = async (token, title, content, categoryIds) => {
  const userId = await findByToken(token);
  const result = await sequelize.transaction(async (t) => {
    const posted = await BlogPost.create({ title, content, userId }, { transaction: t });
    const postCategories = categoryIds.map((id) => ({ postId: posted.id, categoryId: id }));
    await PostCategory.bulkCreate(postCategories, { transaction: t });
    return { type: 201, data: posted };
  });
  return result;
};

const getAllPosts = async () => {
  const result = await BlogPost
  .findAll(
    { include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories' }] },
   );
  return { type: 200, data: result };
};

const getPostById = async (id) => {
  const result = await BlogPost
  .findByPk(id, { include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
  { model: Category, as: 'categories' }] });
  if (!result) return { type: 404, data: { message: 'Post does not exist' } }; 
  return { type: 200, data: result };
};

const updatePost = async (title, content, id) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const { data } = await getPostById(id);
  return { type: 200, data };
};

const deletePost = async (id) => {
  const idFound = await BlogPost.findByPk(id);
  console.log(idFound);
  if (!idFound) return { type: 404, data: { message: 'Post does not exist' } };
  await PostCategory.destroy({ where: { postId: id } });
  await BlogPost.destroy({ where: { id } });
  return { type: 204, data: '' };
};

const authorizedId = async (token, postId) => {
  const tokenId = await findByToken(token);
  const { data: { dataValues } } = await getPostById(postId);
  if (!dataValues) return true;
  return Number(tokenId) === Number(dataValues.userId);
};

module.exports = {
  findByToken,
  verifyCategories,
  post,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  authorizedId,
};