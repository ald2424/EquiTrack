const mongoose = require('mongoose');

const exerciseRecordSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    intensity: { type: String, enum: ['light', 'moderate', 'heavy'] },
    notes: String,
});

module.exports = exerciseRecordSchema;