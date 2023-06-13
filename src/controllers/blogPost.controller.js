const { blogPostService } = require('../services');

const post = async (req, res) => {
  const token = req.headers.authorization;
  const { title, content, categoryIds } = req.body;
  if (!await blogPostService.verifyCategories(categoryIds)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  } 
  const { type, data } = await blogPostService.post(token, title, content, categoryIds);
  return res.status(type).json(data);
};

const getAllPosts = async (req, res) => {
  const { type, data } = await blogPostService.getAllPosts();
  return res.status(type).json(data);
};

module.exports = {
  post,
  getAllPosts,
};
