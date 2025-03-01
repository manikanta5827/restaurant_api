const { jwt, crypto } = require('../../../utils/libraries');
const { JWT_SECRET, SIGNATURE_SECRET } = require('../../../utils/envVariables');

const createToken = (userId) => {
    try {
        const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '12h' });
        return token;
    } catch (error) {
        throw new Error(error);
    }
};

const createSignature = (data) => {
    try {
        const signature = crypto.createHmac('sha256', SIGNATURE_SECRET).update(data).digest('hex');
        return signature;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = { createToken, createSignature };