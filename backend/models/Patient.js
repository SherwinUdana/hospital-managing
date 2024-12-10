const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    name: {
        type: String, 
        require: true
    },
    age: {
        type: Number, 
        reuired: true
    },

    gender: {
        type: String,
        require: true,
        enum: ["Male", "Female"]

    }
})

module.exports = mongoose.model('Patient', patientSchema)