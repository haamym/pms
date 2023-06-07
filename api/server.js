const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 2000;

const app = express();


app.get('/',(req, res)=>{
   res.send(`ok its working`)
})

app.get('/api/users',(req, res)=>{
    res.send(`ok its working`)
 })
 

app.listen(port,()=>{
    console.log(`Server Started on ${port}`)
})