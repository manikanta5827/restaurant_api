require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;
const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';
const SIGNATURE_SECRET = process.env.SIGNATURE_SECRET || 'signature_secret';

module.exports = { PORT, DB_URI, JWT_SECRET, SIGNATURE_SECRET };
