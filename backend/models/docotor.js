const mongoose = require('mongoose');

const docotorSchema = new mongoose.Schema({
    email:{type: String, require: true, unique: true},
    name: {type: String, require: true},
    speciality: { type: String, require: true, enum: ["Dentist", "ENT", "Skin", "Cardiology"]}
})

module.exports = mongoose.model('Docotor', docotorSchema)