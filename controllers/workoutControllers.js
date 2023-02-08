const Workout = require("../models/Workout");
const mongoose = require("mongoose");

const getAllWorkouts = async (req, res) => {
    try {
        const user_id = req.user._id;

        const workouts = await Workout.find({user_id}).sort({ createdAt: -1})
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
    let emptyFields = [];
    if(!title) {
        emptyFields.push('title');
    }
    if(!load) {
        emptyFields.push('load');
    }
    if(!reps) {
        emptyFields.push('reps');
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: "Please fill in the fields", emptyFields});
    }
try {
const user_id = req.user._id;

    const workout = await Workout.create({title, load, reps, user_id});
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
let emptyFields = [];
    if(!updatedBody.title) {
        emptyFields.push('title');
    }
    if(!updatedBody.load) {
        emptyFields.push('load');
    }
    if(!updatedBody.reps) {
        emptyFields.push('reps');
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: "Please fill in the fields", emptyFields});
    }
const workout = await Workout.findByIdAndUpdate(id, updatedBody)

if(workout) {
    res.status(200).json(workout);
}
else {
    res.status(400).json({error: "There was an error updating the workout", emptyFields});
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
