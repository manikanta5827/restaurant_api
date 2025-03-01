const { fetchMenu, addMenu } = require('../services/menuServices');
const responseMessages = require('../../../utils/responseMessages');

const getMenu = async (req, res) => {
    const { restaurantid } = req.body.data;
    if (restaurantid == 0) {
        return res.status(400).json({ status: responseMessages.FAILED, error: 'Restaurant ID is not valid' });
    }
    if (!restaurantid) {
        return res.status(400).json({ status: responseMessages.FAILED, error: responseMessages.MISSING_DATA });
    }
    try {
        const menu = await fetchMenu(restaurantid);
        res.status(200).json({ status: "Success", data: menu });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ status: responseMessages.FAILED, error: error.message });
    }
}

const createMenu = async (req, res) => {
    const { data } = req.body;
    if (!data || !Array.isArray(data) || data.length === 0) {
        return res.status(400).json({ status: responseMessages.FAILED, error: responseMessages.MISSING_DATA });
    }
    try {
        await addMenu(data);
        res.status(201).json({ status: "Success" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ status: responseMessages.FAILED, error: error.message });
    }
}

module.exports = { getMenu, createMenu };
