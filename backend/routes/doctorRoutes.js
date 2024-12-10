const express = require('express')
const router = express.Router()
const {createDocotor, getDocotors, searchDocotor} = require('../controllers/docotorController')
const requireAuth = require('../middleware/requireAuth')

// route to add docotor
router.post('/', requireAuth, createDocotor)

// route to get all docotors
router.get('/', getDocotors)

// route to search docotors
router.post('/search', searchDocotor)

module.exports = router;