const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    load: {
        type: Number,
        required: tmongoose.rusted,
    },
    reps: {
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Workout", workoutSchema);