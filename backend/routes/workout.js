const { application } = require('express');
const express = require('express');

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
router.post('/', (req, res) => {
    res.json({messg: 'POST a new workout'})
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