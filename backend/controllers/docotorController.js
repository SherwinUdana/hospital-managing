const DOCOTOR = require('../models/docotor');

const createDocotor = async(req, res) => {
    const {email, name , speciality} = req.body

    try {

        if(!email || !name || !speciality){
            return res.status(400).json({message: 'All fields are required'})
        }


        const exictingDocotor = await DOCOTOR.findOne({email})
        if(exictingDocotor) {
            return res.status(400).json({message: 'Doctor is alredy exict with that email '}) 
        }

        const createDocotor =  await DOCOTOR.create({
            email, name, speciality
        })

        res.status(200).json({message: 'New Docotor Added Successfully', createDocotor})


    } catch (error) {
        res.status(500).json({error: error.message || 'Internal server error'})

    }
}

const getDocotors = async (req, res) => {
    try {
        const allDocotors = await DOCOTOR.find()
        res.status(200).json(allDocotors) 

    } catch (error) {
        res.status(500).json({error: error.message || 'Internal Server Error'})
    }

}

const searchDocotor = async(req, res) => {
    const {email} = req.body;

    try {
        const docotor = await DOCOTOR.findOne({email})
        res.status(200).json({message: 'search is successfull', docotor})
    } catch (error) {
        res.status(500).json({error: error.message || 'Internal Server Error'})
    }
} 
     
module.exports = {createDocotor, getDocotors, searchDocotor}