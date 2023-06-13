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

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { type, data } = await blogPostService.getPostById(id);
  return res.status(type).json(data);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const token = req.headers.authorization;
  const foundId = await blogPostService.findByToken(token);
  if (Number(foundId) !== Number(id)) return res.status(401).json({ message: 'Unauthorized user' });
  const { type, data } = await blogPostService.updatePost(title, content, id);
  return res.status(type).json(data);
};

module.exports = {
  post,
  getAllPosts,
  getPostById,
  updatePost,
};

// {
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiaWF0IjoxNjg2Njc2ODE4LCJleHAiOjE2ODY2ODA0MTh9.tjK0mhoKe71YUmQvweTLVwWaxjYU3rvjSvE1v7XEXns
// }
