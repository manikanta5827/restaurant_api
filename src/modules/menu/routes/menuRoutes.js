const express = require('express');
const router = express.Router();
const { getMenu, createMenu } = require('../controllers/menuController');
const { verifyToken } = require('../../../middleware/authMiddleware');
const { verifySignature } = require('../../../middleware/signatureMiddleware');

router.get('/get-menu', [verifyToken, verifySignature], getMenu);
router.post('/create-menu', createMenu);

module.exports = router;