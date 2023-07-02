const {check, validationResult} = require('express-validator');

exports.validateUser = [
    check('name').trim().not().isEmpty().isLength({min:3}).withMessage('Name must be more than 3 characters long'),
    check('email').normalizeEmail().isEmail().withMessage('Invalid email'),
    check('password').trim().not().isEmpty().isLength({min:5}).withMessage('Password must be more than 5 characters long'),
];

exports.userValidation = (req, res, next) =>{
    const result = validationResult(req).array();
    if(result.length == 0){
        return next()
    }

    const  error = result[0].msg;
    res.json({success:false, message: error});

}