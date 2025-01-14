const express = require('express');
const router = express.Router();
const {registerUser,loginUser}= require('../controllers/userControllers');

// Route to handle user registration
router.post('/register', registerUser);

// Route to handle user login
router.post('/login', loginUser);

module.exports = router;