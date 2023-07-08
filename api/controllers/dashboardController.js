const pool = require('../db');

exports.dashboard =  async (req, res) =>{
    try {
        const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1",[req.user])
        res.json(user.rows[0]);
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }

}

exports.profile = async (req, res) =>{
    try {
        const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1",[req.user])
        res.json(user.rows[0]);
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }
}

exports.updateProfile = async (req, res) =>{
    try {
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }

}