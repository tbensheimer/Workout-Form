const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const workoutRoutes = require('./routes/workoutRoutes');

const app = express();

app.use(express.json());

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    app.listen(process.env.PORT);
})
.catch((err) => {
    console.log(err);
})

app.use('/api/workouts', workoutRoutes);



