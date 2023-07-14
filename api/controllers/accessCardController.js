const pool = require('../db');


exports.accesscards = async (req, res) => {
    try {
        let accesscards = await pool.query("SELECT * FROM access_cards");
        if (accesscards.rows.length !== 0) {
            res.json({ message: 'success', accesscards: accesscards.rows });
        }else{
            res.json({ message: 'No accesscards found'});
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }
}

exports.addAccessCard = async (req, res) => {
    try {
        let {user_id,card_number,expiration_date} = req.body;
        let accesscard = await pool.query("INSERT INTO access_cards (user_id,card_number,expiration_date) VALUES ($1,$2,$3) RETURNING *",[user_id,card_number,expiration_date]);
        if(accesscard.rows.length !== 0){
            res.json({ message: 'success',accesscard:accesscard.rows[0] })
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }

}


exports.accesscard = async (req,res)=>{
    try {
        let accesscard = await pool.query("SELECT * FROM access_cards WHERE access_id = $1",[req.params.id]);
        if(accesscard.rows.length !== 0){
            res.json({ message: 'success',accesscard:accesscard.rows[0] })
        }else{
            res.json({ message: 'No accesscard found'});
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }
}


exports.updateAccessCard = async (req, res) => {
    try {
        let {user_id,card_number,expiration_date} = req.body
        let accesscard = await pool.query("UPDATE access_cards SET user_id = $1,card_number = $2,expiration_date = $3 WHERE access_id = $4 RETURNING *",[user_id,card_number,expiration_date,req.params.id]);
        if(accesscard.rows.length !== 0){
            res.json({ message: 'success',accesscard:accesscard.rows[0] })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }

}

exports.deleteAccessCard = async (req, res) => {
    try {
        let accesscard = await pool.query("DELETE FROM access_cards WHERE access_id = $1",[req.params.id]);
        res.json({ message: 'success' });
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }

}
