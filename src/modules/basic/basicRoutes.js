const express = require('express');
const router = express.Router();
const responseMessages = require('../../utils/responseMessages');

router.get('/', (req, res) => {
    res.status(200).json({ status: responseMessages.SUCCESS, message: 'Welcome to the API' });
});
router.get('/health', (req, res) => {
    res.status(200).json({ status: responseMessages.SUCCESS, message: 'API is running' });
});

module.exports = router;