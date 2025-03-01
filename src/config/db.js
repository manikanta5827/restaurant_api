const { Sequelize } = require('sequelize');
const { DB_URI } = require('../utils/envVariables');

const sequelize = new Sequelize(DB_URI, {
    dialect: 'postgres',
    logging: false
});

sequelize.authenticate().then(() => {
    console.log('Database Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
});

module.exports = sequelize;
