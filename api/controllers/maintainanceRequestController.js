const pool = require('../db');

// maintenance_requests(request_id SERIAL PRIMARY KEY, user_id uuid, FOREIGN KEY(user_id) REFERENCES users(user_id), facility_id INT, FOREIGN KEY(facility_id) REFERENCES facilities(facility_id), request_date DATE NOT NULL, description TEXT NOT NULL);

exports.maintainanceRequests = async (req, res) => {
    try {
        let maintainanceRequests = await pool.query("SELECT * FROM maintenance_requests");
        if (maintainanceRequests.rows.length !== 0) {
            res.json({ message: 'success', maintainanceRequests: maintainanceRequests.rows });
        }else{
            res.json({ message: 'No maintainanceRequests found'});
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }
}

exports.addMaintainanceRequest = async (req, res) => {

    
    try {
        let {user_id,facility_id,request_date,description} = req.body;
        let maintainanceRequest = await pool.query("INSERT INTO maintenance_requests (user_id,facility_id,request_date,description) VALUES ($1,$2,$3,$4) RETURNING *",[user_id,facility_id,request_date,description]);
        if(maintainanceRequest.rows.length !== 0){
            res.json({ message: 'success',maintainanceRequest:maintainanceRequest.rows[0] })
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }

}




exports.maintainanceRequest = async (req, res) => {
    try {
        let request = await pool.query("SELECT * FROM maintenance_requests WHERE request_id = $1",[req.params.id]);
        if (request.rows.length !== 0) {
            res.json({ message: 'success', request: request.rows[0] });
        }else{  
            res.json({ message: 'No request found'});
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')   
    }
}

exports.updateMaintainanceRequest = async (req, res) => {
    try {
        let {user_id,facility_id,request_date,description} = req.body;
        let request = await pool.query("UPDATE maintenance_requests SET user_id = $1, facility_id = $2, request_date = $3, description = $4 WHERE request_id = $5 RETURNING *",[user_id,facility_id,request_date,description,req.params.id]);
        if (request.rows.length !== 0) {
            res.json({ message: 'success', request: request.rows[0] });
        }else{  
            res.json({ message: 'No request found'});
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }

}

exports.deleteMaintainanceRequest = async (req, res) => {
    try {
        let request = await pool.query("DELETE FROM maintenance_requests WHERE request_id = $1",[req.params.id]);
        res.json({ message: 'success'});
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }
}