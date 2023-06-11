const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 2000;

const app = express();


app.get('/',(req, res)=>{
   res.send(`ok its working`)
})

app.get('/api/users',(req, res)=>{
    res.send(`${req.url}`)
 })
 

app.listen(port,()=>{
    console.log(`Server Started on ${port}`)
})

