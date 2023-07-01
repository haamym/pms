const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 2000;
const userRouter = require('./routes/userRoutes')
const authRouter = require('./routes/authRoutes')


const app = express();

app.get('/',(req, res)=>{
   res.json(`ok its working`)
})


app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

app.listen(port,()=>{
    console.log(`Server Started on ${port}`)
})

