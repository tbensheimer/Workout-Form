const { json } = require('express');
const express = require('express');
const Workout = require('../models/Workout');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: "Get Workouts"});
})

router.get('/:id', (req, res) => {
    res.json({mssg: "Get Details of Workout"});
})

router.post('/', (req, res) => {
    res.json({mssg: "Create Workout"});
})

router.patch('/:id', (req, res) => {
    res.json({mssg: "Update Workout"});
})

router.delete('/:id', (req, res) => {
    res.json({mssg: "Delete Workout"});
})

module.exports = router;