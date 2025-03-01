const express = require('express');
const router = express.Router();
const { generateToken, generateSignature } = require('../controllers/authController');

router.post('/generate-token', generateToken);
router.post('/generate-signature', generateSignature);

module.exports = router;
