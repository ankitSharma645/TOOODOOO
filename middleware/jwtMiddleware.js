const jwt = require('jsonwebtoken');
require('dotenv').config(); // Ensure dotenv is properly configured to load .env variables

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    // Extracting token from Bearer token
    const authToken = token.split(' ')[1]; 

    // Verify the token using environment variable
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);

    // Attach user information to request object
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;
