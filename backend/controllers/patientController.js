const PATIENT = require('../models/Patient')

const createPatient  = async(req, res) => {
    const {name, age, gender} =req.body;

    try{

        if(!name || !age || !gender) {
            res.status(400).json({message: 'All fields are required'})
        }

        
        const createPatient = await PATIENT.create({
            name, 
            age, 
            gender
        })

        res.status(200).json({message: 'create patient successfully', createPatient})

    } catch (error) {
        res.status(500).json({error: error.message || 'Internal Server Error'})
    }
} 


const getPatient = async (req, res) => {
    try {
        const allPatient = await PATIENT.find()
        res.status(200).json(allPatient) 

    } catch (error) {
        res.status(500).json({error: error.message || 'Internal Server Error'})
    }

}




const serachPatient = async(req, res) => {
    const {name} = req.body;

    try{
        const patient = await PATIENT.findOne({name})

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.status(200).json({message: 'search is successfull', patient})

    } catch (error) {
        res.status(500).json({error: error.message || 'Internal Server error'})
    }

}


module.exports = {createPatient ,serachPatient, getPatient }
