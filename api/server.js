const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 2000;
const userRouter = require('./routes/userRoutes')

const app = express();

app.get('/',(req, res)=>{
   res.json(`ok its working`)
})


 
app.use('/api/users', userRouter)

app.listen(port,()=>{
    console.log(`Server Started on ${port}`)
})

