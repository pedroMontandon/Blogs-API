const express = require('express');
const { userController } = require('../controllers');
const { userValidation, tokenValidation } = require('../middlewares');

const router = express.Router();

router.post('/', userValidation.validateSignUp, userController.insertUser);
router.get('/:id', tokenValidation.validateToken, userController.getUser);
router.get('/', tokenValidation.validateToken, userController.getAllUsers);

module.exports = router;