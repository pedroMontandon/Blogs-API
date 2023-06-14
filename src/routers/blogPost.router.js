const express = require('express');
const { tokenValidation, blogPostValidation } = require('../middlewares');
const { blogPostController } = require('../controllers');

const router = express.Router();

router.get('/search', tokenValidation.validateToken, blogPostController.searchPosts);
router.get('/:id', tokenValidation.validateToken, blogPostController.getPostById);
router.delete('/:id', tokenValidation.validateToken, blogPostController.deletePost);
router.put(
'/:id', 
tokenValidation.validateToken,
blogPostValidation.validateFields, 
blogPostController.updatePost,
);
router.get('/', tokenValidation.validateToken, blogPostController.getAllPosts);
router.post(
'/', 
blogPostValidation.validateFields,
tokenValidation.validateToken, 
blogPostController.post,
);

module.exports = router;