const { check } = require('express-validator');
const validate = require('./BaseValidator');
const config = require('../../config/systemConfig');

const validationRules = {
    create: [
        check('name').trim().notEmpty()
            .withMessage(config.RESPONSE_VALIDATION_REQUIRED.replace('{{FIELD}}', 'NAME'))
            .matches(/^[A-Za-z\s]+$/)
            .withMessage(config.RESPONSE_VALIDATION_ALPHABETS_REQUIRED.replace('{{FIELD}}', 'NAME'))
            .escape(),
    ],
    getById: [
        check('id').trim().notEmpty()
            .withMessage(config.RESPONSE_VALIDATION_REQUIRED.replace('{{FIELD}}', 'ID'))
            .isInt()
            .withMessage(config.RESPONSE_ERROR_INVALID_DETAILS.replace('{{FIELD}}', 'ID'))
            .escape(),
    ],
    getAll: [
        check('pageNumber').trim().optional()
            .isInt()
            .withMessage(config.RESPONSE_ERROR_INVALID_DETAILS.replace('{{FIELD}}', 'PAGE NUMBER'))
            .escape(),
        check('pageSize').trim().optional()
            .isInt()
            .withMessage(config.RESPONSE_ERROR_INVALID_DETAILS.replace('{{FIELD}}', 'PAGE SIZE'))
            .escape(),
        check('name').trim().optional()
            .matches(/^[A-Za-z\s]+$/)
            .withMessage(config.RESPONSE_VALIDATION_ALPHABETS_REQUIRED.replace('{{FIELD}}', 'NAME'))
            .escape(),
    ],
};


module.exports = (routeValidation) => [
    validationRules[routeValidation],
    validate
];
