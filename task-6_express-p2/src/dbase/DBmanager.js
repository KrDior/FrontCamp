/* eslint-disable no-undef */
/* eslint-disable curly */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable consistent-return */
const mongoose = require('mongoose');
require('custom-env').env(true);
// eslint-disable-next-line no-unused-vars
const paginate = require('mongoose-paginate');
const { newsModel } = require('../models/newsSchema');

const dbaseConfig = {
    mongoDB: process.env.MONGODB_URL_DEV,
    models: {
        newsModel,
    },
};

mongoose.promise = global.Promise;

class DbaseManager {
    constructor(config = dbaseConfig) {
        if (DbaseManager.instance) {
            return DbaseManager.instance;
        }
        DbaseManager.instance = this;
        this.config = config;
        this.mongoose = mongoose;
        this.mongoDB = config.mongoDB;
        this.mongoose.connect(this.mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
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

    async update(
        searchCriteria,
        model = newsModel,
        updateData = null,
        options = { new: true },
    ) {
        let result;
        try {
            result = await model.findOneAndUpdate(
                searchCriteria,
                updateData,
                options,
            );
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
