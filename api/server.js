const express = require('express');
const port = process.env.PORT || 2000;
const cors = require('cors')
const userRouter = require('./routes/userRoutes')
const authRouter = require('./routes/authRoutes')
const dashboardRoute = require('./routes/dashboardRoute');

const app = express();
app.use(cors());
app.use(express.json())



app.get('/',(req, res)=>{
   res.json(`ok its working`)
})


app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/dashboard',dashboardRoute)

app.listen(port,()=>{
    console.log(`Server Started on ${port}`)
})

