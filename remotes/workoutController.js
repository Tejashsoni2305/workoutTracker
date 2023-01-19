const Workout = require('../data_models/exercises')

const mongoose = require('mongoose')

//Show all exercises
const getAllExecise = async (req, res) => {
    const allExercises = await Workout.find({}).sort({createdAt: -1})
    res.json(allExercises)
}

//Show specific exercise
const getExercise = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.json({error: 'No such exercise'})
    }
    const getOne = await Workout.findById(id)

    if(!getOne) {
        res.json({error: 'No such exercise'})
    }

    res.json(getOne)
}

//create new exercise
const createExercise = async (req, res) => {
    const {name, reps, weight, sets, restTime} = req.body
    try {
        const training = await Workout.create({name, reps, weight, sets, restTime})
        res.json(training)
    } catch (error){
        res.json({error: error.message})
    }
}

//delete exercise
const deleteExercise = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.json({error: 'No such exercise'})
    }
    const delExercise = await Workout.findByIdAndDelete({_id: id})
    if(!delExercise){
        res.json({error: 'No such exercise'})
    }
    res.json(delExercise)
    
}

//update exercise
const updateExercise = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.json({error: 'No such exercise'})
    }
    const updtExercise = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!updtExercise){
        res.json({error: 'No such exercise'})
    }
    res.json(updtExercise)


}




module.exports = {
    getAllExecise,
    createExercise,
    getExercise,
    deleteExercise,
    updateExercise
}