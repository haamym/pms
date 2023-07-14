const pool = require('../db');


exports.facilities = async (req, res) => {
    try {
        let facilities = await pool.query("SELECT * FROM facilities");
        if (facilities.rows.length !== 0) {
            res.json({ message: 'success', facilities: facilities.rows });
        }else{
            res.json({ message: 'No facilities found'});
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }


}


exports.addFacility = async (req, res) => {
    try {
        let {property_id,facility_name,description,location} = req.body;

        let facility = await pool.query("INSERT INTO facilities (property_id,facility_name,description,location) VALUES ($1,$2,$3,$4) RETURNING *",[property_id,facility_name,description,location]);
        if(facility.rows.length !== 0){
            res.json({ message: 'success' })
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }

}

exports.facility = async (req,res)=>{
    try {
        let facility = await pool.query("SELECT * FROM facilities WHERE facility_id = $1",[req.params.id]);
        if(facility.rows.length !== 0){
            res.json({ message: 'success',facility:facility.rows[0] })
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }
}


exports.updateFacility = async (req, res) => {
    try {

        let {property_id,facility_name,description,location } = req.body
        let facility = await pool.query("UPDATE facilities SET property_id = $1,facility_name = $2,description = $3,location = $4 WHERE facility_id = $5 RETURNING *",[property_id,facility_name,description,location,req.params.id]);
        if(facility.rows.length !== 0){
            res.json({ message: 'success',facility:facility.rows[0] })
        }
        
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }

}

exports.deleteFacility = async (req, res) => {
    try {
        
        let facility = await pool.query("DELETE FROM facilities WHERE facility_id = $1",[req.params.id]);
            res.json({ message: 'success' })
        

    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }   

}