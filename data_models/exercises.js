const mongoose = require('mongoose')
const Schema = mongoose.Schema
const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    restTime: {
        type: Number,
        required: true,
    }
}, { timestamps: true})
module.exports = mongoose.model('Workout', exerciseSchema)