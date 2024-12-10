const mongoose = require('mongoose')

const appoinmentSchema = new mongoose.Schema({
    docotorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Docotot",
        require: true
    },

    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        require: true
    },

    appoinmentNumber : {
        type : String,
        require : true,
        unique : true  
    },


    appointmentDate : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Appoinment', appoinmentSchema)