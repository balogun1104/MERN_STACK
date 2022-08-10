const express = require('express');
const Workout = require('../models/workoutModel')

const router = express.Router()

// Get All workout
router.get('/', (req, res) => {
    res.json({messg: 'GET all workouts'})
})

//get single workout
router.get('/:id', (req, res) => {
    res.json({messg: 'GET single workout'})
})

// POST a new Workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
     } catch (error) {
        res.status(400).json({error: error.message})
     } 
})

//DELETE a workout
router.delete('/', (req, res) => {
    res.json({messg: 'DELETE a workout'})
})

//UPDATE a workout
router.patch('/', (req, res) => {
    res.json({messg: 'UPDATE a workout'})
})


module.exports = router