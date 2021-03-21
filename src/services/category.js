const categoryRepository = require('../database/repositories/category');
const config = require('../config/systemConfig');

exports.createACategory = async (data) => {
    const newCategory = await categoryRepository.create('Category', data);

    if (!newCategory) return {
        status: false,
        message: config.RESPONSE_ERROR_DUPLICATE_RECORD
    };

    //Success Response
    return {
        status: true,
        message: config.SUCCESS_RESPONSE_CREATE_RECORD.replace('{{MODEL}}', 'Category'),
        data: newCategory
    }
};

exports.updateACategory = async (id, data) => {
    const updateCategory = await categoryRepository.update(id, data);

    if (!updateCategory) return {
        status: false,
        message: config.RESPONSE_ERROR_INVALID_DETAILS.replace('{{FIELD}}', 'ID')
    };

    //Success Response
    return {
        status: true,
        message: config.SUCCESS_RESPONSE_UPDATE_RECORD.replace('{{MODEL}}', 'Category'),
    }
};

exports.getACategory = async (id) => {
    const category = await categoryRepository.findById(id);

    if (!category) return {
        status: false,
        message: config.RESPONSE_ERROR_INVALID_DETAILS.replace('{{FIELD}}', 'ID')
    };

    //Success Response
    return {
        status: true,
        message: config.SUCCESS_RESPONSE_GET_ONE_RECORD.replace('{{MODEL}}', 'Category'),
        data: category
    }
};

exports.getACategoryByName = async (name) => {
    const category = await categoryRepository.findOne({name});

    if (!category) return {
        status: false,
        message: config.RESPONSE_ERROR_INVALID_DETAILS.replace('{{FIELD}}', 'ID')
    };

    //Success Response
    return {
        status: true,
        message: config.SUCCESS_RESPONSE_GET_ONE_RECORD.replace('{{MODEL}}', 'Category'),
        data: category
    }
};

exports.getAllCategory = async (query) => {
    const where = query.name ? { name: query.name } : {};

    let categoryList = {};
    if (query.pageSize && query.pageNumber) {
        categoryList = await categoryRepository.paginate(query.pageSize, query.pageNumber, where);
    } else {
        categoryList = await categoryRepository.findAll({ where });
    }

    //Success Response
    return {
        status: true,
        message: config.SUCCESS_RESPONSE_GET_ALL_RECORD.replace('{{MODEL}}', 'Category'),
        data: categoryList
    }
};