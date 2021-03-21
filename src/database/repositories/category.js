const DB = require('../models');
const { Op } = require('sequelize');

const CategoryRepository = {};

CategoryRepository.create = async (data = {}) => {
    const checkRecord = await DB.Category.findOne({ 
        where: { name: { [Op.iLike]: data.name } } 
    });
    if (checkRecord) return null;

    return await DB.Category.create({ name: data.name });
}

CategoryRepository.update = async (id, data = {}) => {
    const checkRecord = await DB.Category.findByPK(id);
    if (!checkRecord) return null;

    await DB.Category.update(
        { name: data.name },
        { where: { id } }
    );

    return true;
};

CategoryRepository.paginate = (pageSize, pageNumber, filter) => {
    const query = {
        order: [['id', 'ASC']],
        limit: pageSize,
        offset: (pageNumber - 1) * pageSize
    };
    if (filter) query.where = filter;

    return CategoryRepository.findAll(query)
};

CategoryRepository.findOne = (filter = {}) => DB.Category.findOne({ where: filter });

CategoryRepository.findById = (id) => DB.Category.findByPk(id);

CategoryRepository.findAll = (data) => DB.Category.findAll({ ...data });


module.exports = CategoryRepository;
