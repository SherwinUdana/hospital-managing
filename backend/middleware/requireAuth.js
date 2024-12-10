const jwt = require('jsonwebtoken'); 
const USER = require('../models/user.js')

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" });
    }
    const token = authorization.split(' ')[1];

    try {



        // Verify token and extract user ID
        const { _id } = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the user ID to the request (assuming you have a User model)
        req.user = await USER.findById(_id).select('_id');


        next(); // Proceed to the next middleware or route handler






    } catch (error) {
        console.error('Authorization failed:', error);
        return res.status(401).json({ error: "Request is not authorized" });
    }
};

module.exports = requireAuth;
