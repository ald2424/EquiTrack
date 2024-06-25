const mongoose = require('mongoose');

const medicalDatesSchema = new mongoose.Schema({
    dateType: {
        type: String,
        required: true, //e.g., "vaccination", "deworming"
    },
    date: {
        type: Date,
        required: true,
    },
    notes: {
        type: String
    }
});

const MedicalDates = mongoose.model('MedicalDates', medicalDatesSchema);

module.exports = MedicalDates;