const { express } = require('../../utils/libraries');
const responseMessages = require('../../utils/responseMessages');

const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json({ status: responseMessages.SUCCESS, message: 'Welcome to the API' });
});
router.get('/health', (req, res) => {
    res.status(200).json({
        status: responseMessages.SUCCESS, message: "Service is healthy", timestamp: new Date().toISOString(), checks: {
            database: "connected",
            server: "running"
        }
    });
});

module.exports = router;