const responseMessages = require('../../../utils/responseMessages');
const { createToken, createSignature } = require('../services/authService');


const generateToken = (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) return res.status(400).json({ status: responseMessages.FAILED, error: responseMessages.MISSING_DATA });

        const token = createToken(userId);
        
        res.json({ status: responseMessages.SUCCESS, token });
    } catch (error) {
        res.status(500).json({ status: responseMessages.FAILED, error: responseMessages.INTERNAL_SERVER_ERROR });
    }
};

const generateSignature = (req, res) => {
    try {
        const { data } = req.body;
        if (!data) return res.status(400).json({ status: responseMessages.FAILED, error: responseMessages.MISSING_DATA });

        const signature = createSignature(data);

        res.json({ status: responseMessages.SUCCESS, signature });
    } catch (error) {
        res.status(500).json({ status: responseMessages.FAILED, error: responseMessages.INTERNAL_SERVER_ERROR });
    }
};

module.exports = { generateToken, generateSignature };