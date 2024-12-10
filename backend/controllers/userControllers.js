const USER = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please add all fields' });
    }
    
    const userExists = await USER.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await USER.create({
        name, // Ensure this field matches your schema
        email,
        password: hashedPassword
    });

    if (newUser) {
        return res.status(201).json({
            _id: newUser.id,
            username: newUser.name, 
            email: newUser.email,
            token: generateToken(newUser.id)
        });
    } else {
        return res.status(400).json({ message: 'Invalid user data' });
    }
}








const loginUser = async (req, res) => {
    const { email, password} = req.body


    const user = await USER.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        return res.status(200).json({
            _id: user.id,
            token: generateToken(user.id)
        })

    } else {
        return res.status(400).json({ message: 'Invalid Credentials'});
    }
    
}


module.exports = {registerUser,loginUser}