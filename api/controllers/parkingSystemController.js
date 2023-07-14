const pool = require('../db');

exports.parkingSystems = async (req, res) => {
    try {
        let parkingSystems = await pool.query(`SELECT * FROM parking_system`);
        if(parkingSystems.rows.length > 0){
            res.json({message: 'success', parkingSystems: parkingSystems.rows})
        }
        

        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

exports.addParkingSystem = async (req, res) => {
    try {
        let {user_id,vehicle_number,parking_slot} = req.body;
        let parkingSystem = await pool.query(`INSERT INTO parking_system(user_id,vehicle_number,parking_slot) VALUES ($1,$2,$3) RETURNING *`,[user_id,vehicle_number,parking_slot]);
        if(parkingSystem.rows.length > 0){
            res.json({message: 'success', parkingRequest: parkingSystem.rows[0]})
        }

        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

exports.parkingSystem = async (req, res) => {
    try {
        let {id} = req.params;
        let parkingSystem = await pool.query(`SELECT * FROM parking_system WHERE parking_id = $1`,[id]);
        if(parkingSystem.rows.length > 0){
            res.json({message: 'success', parkingSystem: parkingSystem.rows[0]})
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
        
    }

exports.updateParkingSystem = async (req, res) => {
    try {
        let {id} = req.params;
        let {user_id,vehicle_number,parking_slot} = req.body;  
        let parkingSystem = await pool.query(`UPDATE parking_system SET user_id = $1,vehicle_number = $2,parking_slot = $3 WHERE parking_id = $4 RETURNING *`,[user_id,vehicle_number,parking_slot,id]);
        if(parkingSystem.rows.length > 0){
            res.json({message: 'success', parkingSystem: parkingSystem.rows[0]})
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

exports.deleteParkingSystem = async (req, res) => {
    try {
        let {id} = req.params;
        let parkingSystem = await pool.query(`DELETE FROM parking_system WHERE parking_id = $1`,[id]);
        res.json({ message: 'success'});
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}
