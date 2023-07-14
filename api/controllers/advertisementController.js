const pool = require('../db');
// CREATE TABLE Advertisement(ad_id SERIAL PRIMARY KEY, user_id uuid, FOREIGN KEY(user_id) REFERENCES users(user_id), ad_title VARCHAR(255) NOT NULL, ad_content VARCHAR(255) NOT NULL, ad_date DATE NOT NULL);

// router.route('/advertisements').
// get(authrization,advertisementController.advertisements).
// post(authrization,advertisementController.addAdvertisement);

// router.route('/advertisements/:id').
// get(authrization,advertisementController.advertisement).
// post(authrization,advertisementController.updateAdvertisement).
// delete(authrization,advertisementController.deleteAdvertisement);

exports.advertisements = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

exports.addAdvertisement = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

exports.advertisement = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

exports.updateAdvertisement = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

exports.deleteAdvertisement = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}