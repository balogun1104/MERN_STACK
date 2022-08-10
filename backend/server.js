require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose');


//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
// routes
app.use('/api/workouts' ,workoutRoutes)

//connect to db(
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
    app.listen(process.env.PORT, () => {
        console.log('conneted to db & listening to port', process.env.PORT)
    })
 })
 .catch((error) => {
    console.log(error)
 })


  