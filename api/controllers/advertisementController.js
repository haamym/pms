const pool = require('../db');

exports.advertisements = async (req, res) => {
    try {
        let advertisements = await pool.query("SELECT * FROM Advertisement");
        if (advertisements.rows.length !== 0) {
            res.json({ message: 'success', advertisements: advertisements.rows });
        }else{
            res.json({ message: 'No advertisements found'});
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

exports.addAdvertisement = async (req, res) => {
    try {
        let {user_id, ad_title, ad_content, ad_date} = req.body;
        let newAdvertisement = await pool.query("INSERT INTO Advertisement(user_id, ad_title, ad_content, ad_date) VALUES($1, $2, $3, $4) RETURNING *", [user_id, ad_title, ad_content, ad_date]);
        if(newAdvertisement.rows.length > 0){
            res.json({message: 'success',advertisement:newAdvertisement.rows[0]})
        }

        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

exports.advertisement = async (req, res) => {
    try {
        let {id} = req.params;
        let advertisement = await pool.query("SELECT * FROM Advertisement WHERE ad_id = $1", [id]);
        if(advertisement.rows.length > 0){
            res.json({message: 'success',advertisement:advertisement.rows[0]})
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

exports.updateAdvertisement = async (req, res) => {
    try {
        let {user_id, ad_title, ad_content, ad_date} = req.body;
        let {id} = req.params;
        let updatedAdvertisement = await pool.query("UPDATE Advertisement SET user_id = $1, ad_title = $2, ad_content = $3, ad_date = $4 WHERE ad_id = $5 RETURNING *", [user_id, ad_title, ad_content, ad_date, id]);
        if(updatedAdvertisement.rows.length > 0){
            res.json({message: 'success',advertisement:updatedAdvertisement.rows[0]})
        }
        
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

exports.deleteAdvertisement = async (req, res) => {
    try {
        let {id} = req.params;
        let deletedAdvertisement = await pool.query("DELETE FROM Advertisement WHERE ad_id = $1 RETURNING *", [id]);
            res.json({message: 'success'})
        
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}