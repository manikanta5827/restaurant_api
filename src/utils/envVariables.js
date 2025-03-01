require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;
const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';
const SIGNATURE_SECRET = process.env.SIGNATURE_SECRET || 'signature_secret';
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = { PORT, DB_URI, JWT_SECRET, SIGNATURE_SECRET, NODE_ENV };
