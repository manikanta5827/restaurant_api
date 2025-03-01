const { jwt, crypto } = require('../../../utils/libraries');
const { JWT_SECRET, SIGNATURE_SECRET } = require('../../../utils/envVariables');

const createToken = (email, password) => {
    try {
        const token = jwt.sign({ email, password }, JWT_SECRET, { expiresIn: '12h' });
        return token;
    } catch (error) {
        throw new Error(error.message);
    }
};

const createSignature = (data) => {
    try {
        const signature = crypto.createHmac('sha256', SIGNATURE_SECRET).update(JSON.stringify(data)).digest('hex');
        return signature;
    } catch (error) {
        // console.log(error.message);
        throw new Error(error.message);
    }
};

module.exports = { createToken, createSignature };