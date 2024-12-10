const express = require('express')
const  router = express.Router()
const requireAuth = require('../middleware/requireAuth')

const {createPatient ,serachPatient, getPatient } = require('../controllers/patientController')

// route to add patient
router.post('/',requireAuth, createPatient)

router.get('/', getPatient)

// route to search patient
router.post('/search', serachPatient)

module.exports = router; 