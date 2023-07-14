const pool = require('../db');


exports.properties = async (req, res) =>{
    try {
        const properties = await pool.query("SELECT * FROM properties");
        if(properties.rows.length !== 0){
            res.json({message:'success',properties:properties.rows});
            }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }
}

exports.addProperty = async (req, res) =>{
    try {
        let {property_name,description,location} = req.body;
        const properties = await pool.query("INSERT INTO properties (property_name,description,location) VALUES ($1,$2,$3) RETURNING property_id,property_name",[property_name,description,location]);
        if(properties.rows.length !== 0){
            res.json({message:'success'});
            }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }

}

exports.property = async (req, res) =>{
    try {
        const property = await pool.query("SELECT * FROM properties WHERE property_id = $1",[req.params.id]);
        if(property.rows.length !== 0){
            res.json({message:'success',property:property.rows[0]});
            }
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }
}


exports.updateProperty = async (req, res) =>{
    try {
        const {property_name,description,location} = req.body;
        const property = await pool.query("UPDATE properties SET property_name = $1,description = $2,location = $3 WHERE property_id = $4 RETURNING property_id,property_name",[property_name,description,location,req.params.id]);
        if(property.rows.length !== 0){
            res.json({message:'success'});
            }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }
}   

exports.deleteProperty = async (req, res) =>{
    try {
        const property = await pool.query("DELETE FROM properties WHERE property_id = $1",[req.params.id]);
        res.json({message:'success'});
            
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json('internal server error')
    }
}