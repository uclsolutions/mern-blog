import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

const app =express()
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/mern-blog').then(()=>console.log('Mongo DB is connected')).catch(err=>{console.log(err)})
app.listen(3000,()=>{
    console.log(`Server is listenig on port 3000`)
})

//Test api
app.get('/',(req, res)=>{
    res.status(200).json({success:true, message:`Server is runnin on port 3000`})
})

app.use('/api/user',userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next)=>{
    const statusCode= err.statusCode || 500
    const message= err.message || 'Internla server error'
    res.status(statusCode).json({success:false, statusCode, message})
})