const pool = require('../db');

// CREATE TABLE reports(report_id SERIAL PRIMARY KEY, user_id uuid, FOREIGN KEY(user_id) REFERENCES users(user_id), report_date DATE NOT NULL, category VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL);

exports.reports = async (req, res) => {
    try {
        let reports = await pool.query("SELECT * FROM reports");
        if (reports.rows.length !== 0) {
            res.json({ message: 'success', reports: reports.rows });
        }else{
            res.json({ message: 'No reports found'});
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }

}

exports.addReport = async (req, res) => {
    try {
        let {user_id, report_date, category, description} = req.body;

        let newReport = await pool.query("INSERT INTO reports(user_id, report_date, category, description) VALUES($1, $2, $3, $4) RETURNING *", [user_id, report_date, category, description]);
        if(newReport.rows.length > 0){
            res.json({message: 'success',report:newReport.rows[0]})
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

exports.report = async (req, res) => {
    try {
        let {id} = req.params;
        let report = await pool.query("SELECT * FROM reports WHERE report_id = $1", [id]);
        if(report.rows.length > 0){
            res.json({message: 'success',report:report.rows[0]})
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }

}

exports.updateReport = async (req, res) => {
    try {
        let {user_id, report_date, category, description} = req.body;
        let {id} = req.params;
        let updatedReport = await pool.query("UPDATE reports SET user_id = $1, report_date = $2, category = $3, description = $4 WHERE report_id = $5 RETURNING *", [user_id, report_date, category, description, id]);
        if(updatedReport.rows.length > 0){
            res.json({message: 'success',report:updatedReport.rows[0]})
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }

}

exports.deleteReport = async (req, res) => {
    try {
        let {id} = req.params;
        let deletedReport = await pool.query("DELETE FROM reports WHERE report_id = $1 RETURNING *", [id]);
        res.json({message: 'success'})
        
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }

}