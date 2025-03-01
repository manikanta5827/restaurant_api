const { express } = require('../../../utils/libraries');
const { getMenu, createMenu } = require('../controllers/menuController');
const { verifyToken } = require('../../../middleware/authMiddleware');
const { verifySignature } = require('../../../middleware/signatureMiddleware');

const router = express.Router();
router.post('/get-menu', [verifyToken, verifySignature], getMenu);
router.post('/create-menu', createMenu);

module.exports = router;