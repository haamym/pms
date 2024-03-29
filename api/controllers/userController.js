const pool = require('../db');

exports.getUsers = async (req, res)=>{
    try {
        const users = await pool.query("SELECT user_name,user_id,user_email,user_mobile,user_address,role,property_id FROM users;");
        if(users.rows.length !== 0){
         res.json({message:'success',users:users.rows});
        }
         else{
               res.json({message:'Something went wrong'})
         }

    }
      catch (error) {
         console.log(error.message)
         res.status(500).json('internal server error')
      }
 }

 exports.getUser = async (req, res)=>{
    try {
        const {id} = req.params;
        const user = await pool.query("SELECT user_name,user_email,user_mobile,user_address,role,property_id FROM users WHERE user_id = $1",[id]);
        if(user.rows.length !== 0){
        res.json({message:'success',user:user.rows[0]});
        }else{
            res.json({message:'Something went wrong please check your id'})
        }
        
    }
      catch (error) {
         console.log(error.message)
         res.status(500).json('internal server error')
      }
 }

 exports.updateUser = async (req, res)=>{
      try {
         const {user_name,user_mobile,user_address,role} = req.body;
         const {id} = req.params;
         const user = await pool.query("UPDATE users SET user_name = $1,user_mobile = $2,user_address = $3,role=$4 WHERE user_id = $5 RETURNING user_name,user_email,user_mobile,user_address,role",[user_name,user_mobile,user_address,role,id]);
         if(user.rows.length !== 0){
               res.json({message:'success'});
               }else{
                  res.json({message:'Something went wrong please check your id'})
               }
      } catch (error) {
         console.log(error.message)
         res.status(500).json('internal server error')
      }
   }

   exports.deleteUser = async (req, res)=>{
      try {
         const {id} = req.params;
         const user = await pool.query("DELETE FROM users WHERE user_id = $1",[id]);
         res.json({message:'success'});
               
      } catch (error) {
         console.log(error.message)
         res.status(500).json('internal server error')
      }
   }

