const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutContoller')

const router = express.Router()

// Get All workout
router.get('/', getWorkouts)

//get single workout
router.get('/:id', getWorkout)

// POST a new Workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router