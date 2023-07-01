const express = require('express');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/').post(authController.register).get(authController.login);

module.exports = router;