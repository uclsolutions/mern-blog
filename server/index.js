import express from 'express'
import mongoose from 'mongoose'
const app =express()

mongoose.connect('mongodb://localhost:27017/mern-blog').then(()=>console.log('Mongo DB is connected')).catch(err=>{console.log(err)})
app.listen(3000,()=>{
    console.log(`Server is listenig on port 3000`)
})