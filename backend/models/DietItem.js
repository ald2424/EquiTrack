const mongoose = require('mongoose');

const dietItemSchema = new mongoose.Schema({
    itemType: {
        type: String,
        required: true,
        enum: ['Grain', 'Hay', 'Supplement', 'Medication', 'Herb', 'Other']
    },
    amount: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true,
        enum: ['kg', 'lbs', 'cups', 'oz', 'mg', 'iu', 'ppm', 'g']
    },
    notes: String
});

module.exports = dietItemSchema;