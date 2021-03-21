const express = require('express');
const router = express.Router();

const categoryController = require('../../controllers/category');
const validate = require('../../middlewares/validator/category');

router.get('/:id', validate('getById'), categoryController.getACategory);
router.post('/', validate('create'), categoryController.createACategory);
router.get('/', categoryController.getAllCategories);

module.exports = router;