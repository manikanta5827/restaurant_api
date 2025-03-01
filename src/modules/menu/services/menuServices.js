const { Menu } = require('../models/menuModel');
const responseMessages = require('../../../utils/responseMessages');

const fetchMenu = async (restaurantId) => {
    try {
        const menu = await Menu.findAll({ where: { restaurantId } });
        return menu;
    } catch (error) {
        throw new Error(responseMessages.INTERNAL_SERVER_ERROR);
    }
};

const addMenu = async (menuData) => {
    try {
        await Menu.bulkCreate(menuData);
        return responseMessages.SUCCESS;
    } catch (error) {
        throw new Error(responseMessages.INTERNAL_SERVER_ERROR);
    }
};

module.exports = { fetchMenu, addMenu };