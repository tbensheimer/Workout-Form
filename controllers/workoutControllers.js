const Workout = require("../models/Workout");
const mongoose = require("mongoose");

const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find().sort({ createdAt: -1})
        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(400).json({error: err.message})
    }
}

const getWorkoutDetails = async (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id.trim());

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No such workout with given Id"});
    }

    const workout = Workout.findById(id);

    if (workout) {
        res.status(200).json(workout);
    }
    else {
        res.status(400).json({error: err.message});
    }
}

const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;
try {
    const workout = await Workout.create({title, load, reps});
    res.status(200).json(workout)
}
catch(err) {
    res.status(400).json({error: err.message});
}
}

const updateWorkout = async (req, res) => {
const id = mongoose.Types.ObjectId(req.params.id.trim());
const updatedBody = req.body;

if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: "No such workout with given Id"});
}
const workout = await Workout.findByIdAndUpdate(id, updatedBody)

if(workout) {
    res.status(200).json(workout);
}
else {
    res.status(400).json({error: "There was an error updating the workout"});
}
}

const deleteWorkout = async (req, res) => {
const id = mongoose.Types.ObjectId(req.params.id.trim());

if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: "No such workout with given Id"});
}

const workout = await Workout.findByIdAndDelete(id)
if(workout) {
    res.status(200).json(workout);
}
else {
    res.status(400).json({error: "There was an error deleting workout"});
}
}

module.exports = {
    deleteWorkout,
    updateWorkout,
    createWorkout,
    getAllWorkouts,
    getWorkoutDetails
}
