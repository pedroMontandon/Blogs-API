const express = require('express');
const { tokenValidation, categoryValidation } = require('../middlewares');
const { categoryController } = require('../controllers');

const router = express.Router();

router.get('/', tokenValidation.validateToken, categoryController.getAllCategories);
router.post(
'/', 
tokenValidation.validateToken, 
categoryValidation.validateName,
categoryController.insertCategory,
);

module.exports = router;