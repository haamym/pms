const router = require("express").Router();
const dashboardController = require('../controllers/dashboardController');
const profileController = require('../controllers/profileController');
const propertiesController = require('../controllers/propertiesController');
const authrization = require('../middlewares/authorization');
const facilitiesController = require('../controllers/facilitiesController');
const accessCardController = require('../controllers/accessCardController');
const maintainanceRequestController = require('../controllers/maintainanceRequestController');
const parkingSystemController = require('../controllers/parkingSystemController');
const reportController = require('../controllers/reportController');
const advertisementController = require('../controllers/advertisementController');


router.route('/').get(authrization,dashboardController.dashboard)

router.route('/profile').
get(authrization,profileController.profile).
post(authrization,profileController.updateProfile);

router.route('/properties').
get(authrization,propertiesController.properties).
post(authrization,propertiesController.addProperty);

router.route('/properties/:id').
get(authrization,propertiesController.property).
post(authrization,propertiesController.updateProperty).
delete(authrization,propertiesController.deleteProperty);

router.route('/facilities').
get(authrization,facilitiesController.facilities).
post(authrization,facilitiesController.addFacility);

router.route('/facilities/:id').
get(authrization,facilitiesController.facility).
post(authrization,facilitiesController.updateFacility).
delete(authrization,facilitiesController.deleteFacility);

router.route('/accesscards').
get(authrization,accessCardController.accesscards).
post(authrization,accessCardController.addAccessCard);

router.route('/accesscards/:id').
get(authrization,accessCardController.accesscard).
post(authrization,accessCardController.updateAccessCard).
delete(authrization,accessCardController.deleteAccessCard);

router.route('/maintainance_requests').
get(authrization,maintainanceRequestController.maintainanceRequests).
post(authrization,maintainanceRequestController.addMaintainanceRequest);

router.route('/maintainance_requests/:id').
get(authrization,maintainanceRequestController.maintainanceRequest).
post(authrization,maintainanceRequestController.updateMaintainanceRequest).
delete(authrization,maintainanceRequestController.deleteMaintainanceRequest);

router.route('/parking_systems').
get(authrization,parkingSystemController.parkingSystems).
post(authrization,parkingSystemController.addParkingSystem);

router.route('/parking_systems/:id').
get(authrization,parkingSystemController.parkingSystem).
post(authrization,parkingSystemController.updateParkingSystem).
delete(authrization,parkingSystemController.deleteParkingSystem);


router.route('/reports').
get(authrization,reportController.reports).
post(authrization,reportController.addReport);

router.route('/reports/:id').
get(authrization,reportController.report).
post(authrization,reportController.updateReport).
delete(authrization,reportController.deleteReport);

router.route('/advertisements').
get(authrization,advertisementController.advertisements).
post(authrization,advertisementController.addAdvertisement);

router.route('/advertisements/:id').
get(authrization,advertisementController.advertisement).
post(authrization,advertisementController.updateAdvertisement).
delete(authrization,advertisementController.deleteAdvertisement);


module.exports = router;