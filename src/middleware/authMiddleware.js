const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/envVariables');
const responseMessages = require('../utils/responseMessages');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: responseMessages.missingToken });
    }
    try {
        jwt.verify(token.split(' ')[1], JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).json({ error: responseMessages.invalidToken });
    }
};

module.exports = authMiddleware;
