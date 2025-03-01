const { fetchMenu, addMenu } = require('../services/menuServices');
const responseMessages = require('../../../utils/responseMessages');

const getMenu = async (req, res) => {
    const { restaurantId } = req.body.data;
    if (!restaurantId) {
        return res.status(400).json({ status: responseMessages.FAILED, error: responseMessages.MISSING_DATA });
    }
    try {
        const menu = await fetchMenu(restaurantId);
        res.status(200).json({ status: responseMessages.SUCCESS, data: menu });
    } catch (error) {
        res.status(500).json({ status: responseMessages.FAILED, error: responseMessages.INTERNAL_SERVER_ERROR });
    }
}

const createMenu = async (req, res) => {
    const { menuData } = req.body.data;
    if (!menuData) {
        return res.status(400).json({ status: responseMessages.FAILED, error: responseMessages.MISSING_DATA });
    }
    try {
        await addMenu(menuData);
        res.status(200).json({ status: responseMessages.SUCCESS });
    } catch (error) {
        res.status(500).json({ status: responseMessages.FAILED, error: responseMessages.INTERNAL_SERVER_ERROR });
    }
}

module.exports = { getMenu, createMenu };
