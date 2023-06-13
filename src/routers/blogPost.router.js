const express = require('express');
const { tokenValidation, blogPostValidation } = require('../middlewares');
const { blogPostController } = require('../controllers');

const router = express.Router();

router.post(
'/', 
blogPostValidation.validateFields,
tokenValidation.validateToken, 
blogPostController.post,
);

module.exports = router;