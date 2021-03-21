const categoryService = require('../services/category');
const config = require('../config/systemConfig');

exports.createACategory = async (req, res) => {
    try {
        const result = await categoryService.createACategory(req.body);

        const statusCode = result.status? 200 : 400;
        return res.status(statusCode).json(result);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: config.RESPONSE_ERROR_SERVER_ERROR
        })        
    }
}

exports.getACategory = async (req, res) => {
    try {
        const result = await categoryService.getACategory(req.params.id);

        const statusCode = result.status? 200 : 400;
        return res.status(statusCode).json(result);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: config.RESPONSE_ERROR_SERVER_ERROR
        })        
    }
}

exports.getAllCategories = async (req, res) => {
    try {
        const result = await categoryService.getAllCategory(req.query);

        const statusCode = result.status? 200 : 400;
        return res.status(statusCode).json(result);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: config.RESPONSE_ERROR_SERVER_ERROR
        })        
    }
}