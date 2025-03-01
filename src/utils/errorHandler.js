const responseMessages = require('./responseMessages');

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: responseMessages.INTERNAL_SERVER_ERROR });
};

module.exports = {errorHandler};
