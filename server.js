require('dotenv').config()

const express = require('express')

const app = express()    //Express app

const mongoose = require('mongoose')

const cors = require('cors');

app.use(cors({
    origin: 'https://trackyourprogress.netlify.app' 
}));

const workoutPaths = require('./routes/workout')
app.use(express.json())

app.use((req, res, next) => {     //middleware
    console.log(req.path, req.method)
    next()
})

// connection to mongodb
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB)
.then(() => {
    app.listen(process.env.PORT, () => {    //Listening for requests
        console.log('Connected to Database and Listening on port', process.env.PORT)
    })
 })
 .catch((error) => {
    console.log(error)
 })


//APIs
app.use('/api/workout' , workoutPaths)


