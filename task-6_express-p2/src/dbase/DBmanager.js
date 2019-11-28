/* eslint-disable curly */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable consistent-return */
const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const paginate = require('mongoose-paginate');
const { newsModel } = require('./news-schema');

const dbaseConfig = {
    mongoDB: 'mongodb+srv://KrDior:xzx123654@cluster0-qdqpg.mongodb.net/test?retryWrites=true&w=majority',
    models: {
        newsModel,
    },
};

class DbaseManager {
    constructor(config = dbaseConfig) {
        if (DbaseManager.instance) {
            return DbaseManager.instance;
        }
        DbaseManager.instance = this;
        this.config = config;
        this.mongoose = mongoose;
        this.mongoDB = config.mongoDB;
        this.mongoose.connect(this.mongoDB, { useNewUrlParser: true });
        this.mongoose.Promise = Promise;
        this.db = mongoose.connection;
        this.db.on('error', this.handleErr.bind(this));
    }

    handleErr(error) {
        console.log(error);
    }

    async create(object, model, options = null) {
        let result;
        try {
            result = await model.create(object, options);
        } catch (err) {
            this.handleErr(err);
            return false;
        }
        return result;
    }

    async update(searchCriteria, model = newsModel, updateData = null, options = { new: true }) {
        let result;
        try {
            result = await model.findOneAndUpdate(searchCriteria, updateData, options);
        } catch (err) {
            this.handleErr(err);
            return;
        }
        return result;
    }

    async findAllItems(model) {
        let result;
        try {
            result = await model.find();
        } catch (err) {
            this.handleErr(err);
            return;
        }
        return result;
    }

    async find(searchCriteria, model, selection = null, options = null) {
        let result;
        try {
            result = await model.find(searchCriteria, selection, options);
        } catch (err) {
            this.handleErr(err);
        }
        return result;
    }

    async findProductPage(searchCriteria, model) {
        let result;
        try {
            const allItemsFromBase = await model.find();
            result = await this.filterDBase(searchCriteria, allItemsFromBase);
        } catch (err) {
            this.handleErr(err);
        }
        return result;
    }

    async delete(id, model) {
        let deleteSuccess;
        try {
            deleteSuccess = await model.findByIdAndDelete(id);
        } catch (err) {
            this.handleErr(err);
            return;
        }
        return deleteSuccess;
    }

    async filterDBase(searchCriteria, allItemsFromBase) {
        let result = allItemsFromBase;
        if (Object.entries(searchCriteria).length > 1) {
            const filterDataParse = JSON.parse(searchCriteria.filterparams);
            filterDataParse.forEach((filterParse) => {
                switch (filterParse.targetProp) {
                    case 'diagonal':
                        if (filterParse.min && filterParse.max) result = result
                            // eslint-disable-next-line max-len
                            .filter(it => it.diagonal >= filterParse.min && it.diagonal <= filterParse.max);
                        break;
                    case 'portInterface':
                        if (filterParse.checkerList.length) result = result
                            .filter(it => filterParse.checkerList.includes(it.portInterface));
                        break;
                    case 'typeOfMatrix':
                        if (filterParse.checkerList.length) result = result
                            .filter(it => filterParse.checkerList.includes(it.typeOfMatrix));
                        break;
                    case 'support3D':
                        // eslint-disable-next-line max-len
                        if (filterParse.checkerList.length) result = result.filter(it => it.support3D);
                        break;
                    default:
                }
            });
        }
        if (Object.entries(searchCriteria).length) {
            const pageParamsParse = JSON.parse(searchCriteria.pageparams);
            const elementLimit = pageParamsParse.hitsPerPage;
            const currentPage = pageParamsParse.page;
            const begin = (currentPage - 1) * elementLimit;
            const end = begin + elementLimit;
            const itemsInBase = result.length;
            const allPages = Math.ceil(itemsInBase / elementLimit);
            result = result.slice(begin, end);
            result.push({
                itemsInBase,
                currentPage,
                allPages,
            });
        }
        return result;
    }
}

module.exports = DbaseManager;
