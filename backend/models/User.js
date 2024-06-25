const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    experienceLevel: {
        type: String,
        required: true,
    },
    professionalStatus: {
        isProfessional:  {
            type: Boolean,
            default: false,
        },
        yearsAsProfessional: Number,
        professionType: String,
    }
});

module.exports = mongoose.model('User', userSchema);