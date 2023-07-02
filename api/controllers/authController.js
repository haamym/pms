const pool = require('./../db')
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utilities/jwtAuth');



exports.register = async (req, res)=>{


    try {
        const { name, email, password} = req.body;

        const user = await pool.query('SELECT * FROM users WHERE user_email = $1',[email])
        if(user.rows.length !== 0){
            return res.status(401).send('User already exists')
            
        }
        const  saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const  bcryptPassword = await bcrypt.hash(password,salt);

        const newUser = await pool.query('INSERT INTO users(user_name,user_email,user_password) VALUES ($1,$2,$3) RETURNING *',[name,email,bcryptPassword])
        if(newUser.rows.length > 0){
            const token = jwtGenerator(newUser.rows[0].user_id)
            res.status(201).json({message:'Registered Successfully',token:token})
        }
      

    } catch (error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
 }

 exports.login = async (req, res)=>{
    try {
        const {email, password} = req.body;

        const user = await pool.query("SELECT * FROM users WHERE user_email = $1",[email])
        user.rows.length == 0 && res.status(401).json('Email does not exist, Please proceed to signup');
        
        const isValidPassword = await bcrypt.compare(password, user.rows[0].user_password);
        !isValidPassword && res.status(401).json('Email or password is incorrect');

        const token =  await jwtGenerator(user.rows[0].user_id)
        res.json({message:'Successful',token: token})
        
    } catch (error) {
        console.error(error)
    }
 }