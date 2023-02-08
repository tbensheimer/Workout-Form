const express = require('express');
const Workout = require('../models/Workout');
const workoutController = require('../controllers/workoutControllers');
const requireAuth = require('../middleware/requireAuth');


const router = express.Router();

router.use(requireAuth);

router.get('/', workoutController.getAllWorkouts);


router.get('/:id', workoutController.getWorkoutDetails)

router.post('/', workoutController.createWorkout)

router.patch('/:id', workoutController.updateWorkout)

router.delete('/:id', workoutController.deleteWorkout)

module.exports = router;
