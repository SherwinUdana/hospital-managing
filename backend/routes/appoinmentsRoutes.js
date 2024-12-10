const express = require('express')
const router =  express.Router();

const  {createAppoinment} = require('../controllers/appoinmentControllers')


router.post('/', createAppoinment)

module.exports = router