const responseMessages = require('../../../utils/responseMessages');
const { createToken, createSignature } = require('../services/authService');


const generateToken = (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ status: responseMessages.FAILED, error: responseMessages.MISSING_DATA });

        const token = createToken(email, password);

        res.status(200).json({ status: responseMessages.SUCCESS, token });
    } catch (error) {
        res.status(500).json({ status: responseMessages.FAILED, error: error.message });
    }
};

const generateSignature = (req, res) => {
    try {
        const { data } = req.body;
        console.log(data);
        if (!data) return res.status(400).json({ status: responseMessages.FAILED, error: responseMessages.MISSING_DATA });

        const signature = createSignature(data);
        console.log(signature);
        res.status(200).json({ status: responseMessages.SUCCESS, signature });
    } catch (error) {
        res.status(500).json({ status: responseMessages.FAILED, error: error.message });
    }
};

module.exports = { generateToken, generateSignature };