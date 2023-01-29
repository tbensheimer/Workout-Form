const Workout = require("../models/Workout");

const getAllWorkouts = (req, res) => {
const workouts = Workout.find()
.then(() => {
    res.json(workouts);
})
.catch((err) => {
    console.log(err);
})
}

const getWorkoutDetails = (req, res) => {
    const id = req.params;
    const workout = Workout.findById(id)
    .then(() => {
        res.json(workout);
    })
    .catch((err) => {
        console.log(err);
    })

}

const createWorkout = (req, res) => {
const workout = req.body;
const workoutCreated = Workout.create((workout))
.then(() => {
    res.json(workoutCreated);
})
.catch((err) => {
    console.log(err);
})
}

const updateWorkout = (req, res) => {
const id = req.params;
const body = req.body;
const workout = Workout.findByIdAndUpdate(id, body)
.then(() => {
    res.json(workout);
})
.catch((err) => {
    console.log(err);
})
}

const deleteWorkout = (req, res) => {
const id = req.params;
const workout = Workout.findByIdAndDelete(id)
.then(() => {
    res.json(workout);
})
.catch((err) => {
    console.log(err);
})
}

module.exports = {
    deleteWorkout,
    updateWorkout,
    createWorkout,
    getAllWorkouts,
    getWorkoutDetails
}
