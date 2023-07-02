const express = require('express');
const authController = require('./../controllers/authController');
const {validateUser,userValidation} = require('../middlewares/validator/validator');
const authrization = require('../middlewares/authorization');


const router = express.Router();

router.route('/register').post(validateUser,userValidation, authController.register);
router.route('/login').post(authController.login);
router.route('/verify').get(authrization,authController.verifyToken);

module.exports = router;