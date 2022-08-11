const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout
} = require('../controllers/workoutContoller')

const router = express.Router()

// Get All workout
router.get('/', getWorkouts)

//get single workout
router.get('/:id', getWorkout)
// POST a new Workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/', (req, res) => {
    res.json({messg: 'DELETE a workout'})
})

//UPDATE a workout
router.patch('/', (req, res) => {
    res.json({messg: 'UPDATE a workout'})
})


module.exports = router