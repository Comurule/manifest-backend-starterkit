const DB = require('../models');
const { Op } = require('sequelize');

const modelRepository = {};

modelRepository.create = async (modelName, data = {}) => await DB[modelName].create({ name: data.name });

modelRepository.update = async (modelName, id, data = {}) => {
    const checkRecord = await DB[modelName].findByPK(id);
    if (!checkRecord) return null;

    await DB[modelName].update(
        { name: data.name },
        { where: { id } }
    );

    return true;
};

modelRepository.paginate = (pageSize, pageNumber, filter) => {
    const query = {
        order: [['id', 'ASC']],
        limit: pageSize,
        offset: (pageNumber - 1) * pageSize
    };
    if (filter) query.where = filter;

    return CategoryRepository.findAll(query)
};

modelRepository.findOne = (filter = {}) => DB.Category.findOne({ where: filter });

modelRepository.findById = (id) => DB.Category.findByPk(id);

modelRepository.findAll = (data) => DB.Category.findAll({ ...data });


module.exports = modelRepository;
