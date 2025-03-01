const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/db.js');

const Menu = sequelize.define('Menu', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    restaurantid: { type: DataTypes.INTEGER, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    description: { type: DataTypes.TEXT, defaultValue: 'No description available' },
    rating: { type: DataTypes.FLOAT, defaultValue: 0 },
    preparation_time: { type: DataTypes.INTEGER, defaultValue: 10 },
    offer_tag: { type: DataTypes.STRING, defaultValue: 'No Offer' },
}, {
    tableName: 'menu',
    timestamps: false,
});

module.exports = { Menu };
