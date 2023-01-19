const express = require('express')
const router = express.Router()

const {
    getAllExecise,
    createExercise,
    getExercise,
    deleteExercise,
    updateExercise
} = require('../remotes/workoutController')


// get all exercise
router.get('/', getAllExecise)


//get one exercise
router.get('/:id', getExercise)


// Post new exercise
router.post('/', createExercise)


// delete exercise
router.delete('/:id', deleteExercise)


// Patch a workout
router.patch('/:id', updateExercise)

module.exports = router
