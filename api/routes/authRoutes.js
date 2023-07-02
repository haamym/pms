const express = require('express');
const authController = require('./../controllers/authController');
const {validateUser,userValidation} = require('../middlewares/validator/validator');


const router = express.Router();

router.route('/register').post(validateUser,userValidation, authController.register);
router.route('/login').post(authController.login);

module.exports = router;