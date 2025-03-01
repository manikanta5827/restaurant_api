const { jwt } = require('../utils/libraries');
const { JWT_SECRET } = require('../utils/envVariables');
const responseMessages = require('../utils/responseMessages');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json({ status: responseMessages.FAILED, error: responseMessages.MISSING_TOKEN });
    }
    try {
        jwt.verify(token.split(' ')[1], JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).json({ status: responseMessages.FAILED, error: responseMessages.INVALID_TOKEN });
    }
};

module.exports = { verifyToken };
