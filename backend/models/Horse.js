const mongoose = require('mongoose');
const User = require('./User');
const MedicalDates = require('./MedicalDates');
const dietItemSchema = require('./DietItem');
const exerciseRecordSchema = require('./ExerciseRecord');

const horseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: Number,
    breed: String,
    color: String,
    height: Number,
    sex: String,
    isPregnantOrNursing: Boolean,
    weight: Number,
    bodyScore: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    medicalDates: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'MedicalDates'
    }],
    diet: [dietItemSchema],
    exercise: [exerciseRecordSchema],

});

const Horse = mongoose.model('Horse', horseSchema);
module.exports = Horse;