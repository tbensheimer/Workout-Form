const { json } = require('express');
const express = require('express');
const Workout = require('../models/Workout');
const workoutController = require('../controllers/workoutControllers');

const router = express.Router();

router.get('/', workoutController.getAllWorkouts);


router.get('/:id', workoutController.getWorkoutDetails)

router.post('/', workoutController.createWorkout)

router.patch('/:id', workoutController.updateWorkout)

router.delete('/:id', workoutController.deleteWorkout)

module.exports = router;
