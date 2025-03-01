const { crypto } = require('../utils/libraries');
const responseMessages = require('../utils/responseMessages');
const { SIGNATURE_SECRET } = require('../utils/envVariables');

const verifySignature = (req, res, next) => {
    const { signature, data } = req.body;

    if (!signature) {
        return res.status(400).json({ status: responseMessages.FAILED, error: responseMessages.MISSING_SIGNATURE });
    }

    if (!data) {
        return res.status(400).json({ status: responseMessages.FAILED, error: responseMessages.MISSING_DATA });
    }

    const expectedSignature = crypto.createHmac('sha256', SIGNATURE_SECRET)
        .update(JSON.stringify(data))
        .digest('hex');

    if (signature !== expectedSignature) {
        return res.status(400).json({ status: responseMessages.FAILED, error: responseMessages.INVALID_SIGNATURE });
    }

    next();
};

module.exports = { verifySignature };
