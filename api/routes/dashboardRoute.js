const router = require("express").Router();
const dashboardController = require('../controllers/dashboardController');
const profileController = require('../controllers/profileController');
const propertiesController = require('../controllers/propertiesController');
const authrization = require('../middlewares/authorization');


router.route('/').get(authrization,dashboardController.dashboard)
router.route('/profile').get(authrization,profileController.profile).post(authrization,profileController.updateProfile);
router.route('/properties').get(authrization,propertiesController.properties).post(authrization,propertiesController.addProperty);
router.route('/properties/:id').get(authrization,propertiesController.property).post(authrization,propertiesController.updateProperty).delete(authrization,dashboardController.deleteProperty);

module.exports = router;