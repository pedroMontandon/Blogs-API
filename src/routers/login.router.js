const express = require('express');
const { userController } = require('../controllers');
const { userValidation } = require('../middlewares');

const router = express.Router();

router.post('/', userValidation.validateLogin, userController.login);

module.exports = router;