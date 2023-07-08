const router = require("express").Router();
const dashboardController = require('../controllers/dashboardController');
const authrization = require('../middlewares/authorization');


router.route('/').get(authrization,dashboardController.dashboard)
router.route('/profile').get(authrization,dashboardController.profile).post(authrization,dashboardController.updateProfile)

module.exports = router;