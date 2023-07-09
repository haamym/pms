const pool = require('../db');

exports.profile = async (req, res) =>{
    try {

        const user = await pool.query("SELECT user_name,user_email,user_mobile,user_address FROM users WHERE user_id = $1",[req.user]);
        if(user.rows.length !== 0){
        res.json({message:'success',user:user.rows[0]});
        }else{
            res.json({message:'Something went wrong'})
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }
}

exports.updateProfile = async (req, res) =>{
    try {
        const {user_name,user_mobile,user_address,property_id} = req.body;
        const user = await pool.query("UPDATE users SET user_name = $1,user_mobile = $2,user_address = $3,property_id=$4 WHERE user_id = $5 RETURNING user_name,user_email,user_mobile,user_address",[user_name,user_mobile,user_address,property_id,req.user]);
        if(user.rows.length !== 0){
            res.json({message:'success'});
            }else{
                res.json({message:'Something went wrong'})
            }
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }

}