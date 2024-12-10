const APPOINMENT = require('../models/appoinment')
const DOCOTOR = require('../models/docotor')
const PATIENT = require('../models/Patient') 

const createAppoinment = async (req, res) => {
    const {docotorId, patientId} = req.body

    try{

        const docotor = await DOCOTOR.findById(docotorId)
        const patient = await PATIENT.findById(patientId)  

        console.log(docotor)
        console.log(patient)

        if (!docotor || !patient) {
            return res.status(404).json({message: 'Doctor or Patient not found'})
        }

        const appoinmentNumber = `APPT-${Date.now()}`;

        const appoinment = await APPOINMENT.create({
            docotor: docotorId,
            patient: patientId,
            appoinmentNumber
        })
        
        res.status(200).json({message: 'Appoinment created successfully', appoinment})

    } catch (error) {
        res.status(500).json({error: error.message || 'Internal server errro'})
    }
}

module.exports = {createAppoinment}