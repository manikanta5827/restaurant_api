const { Menu } = require('../models/menuModel');
const responseMessages = require('../../../utils/responseMessages');

const fetchMenu = async (restaurantid) => {
    try {
        const menu = await Menu.findAll({ where: { restaurantid } });
        return menu;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
};

const addMenu = async (menuData) => {
    try {
        await Menu.bulkCreate(menuData);
        return responseMessages.SUCCESS;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { fetchMenu, addMenu };