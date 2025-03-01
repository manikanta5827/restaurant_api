const crypto = require('crypto');
require('dotenv').config();
const responseMessages = require('../utils/responseMessages');
const { SIGNATURE_SECRET } = require('../utils/envVariables');

const verifySignature = (req, res, next) => {
    const { signature, data } = req.body;

    if (!signature) {
        return res.status(400).json({ error: responseMessages.missingSignature });
    }

    if (!data) {
        return res.status(400).json({ error: responseMessages.missingData });
    }

    const expectedSignature = crypto.createHmac('sha256', SIGNATURE_SECRET)
        .update(JSON.stringify(data))
        .digest('hex');

    if (signature !== expectedSignature) {
        return res.status(400).json({ error: responseMessages.invalidSignature });
    }

    next();
};

module.exports = verifySignature;
