const validateFields = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

module.exports = {
    validateFields,
};