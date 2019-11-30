const express = require('express');
const DbaseManager = require('../dbase/DBmanager');
const { newsModel } = require('../models/newsSchema');
const { sendErr, restResponses } = require('./rest_responses');
const newsField = require('../dbase/newsField');

const dbaseManager = new DbaseManager();
const router = express.Router();

// create news
router.post('/', async (req, res) => {
    const object = req.body;
    const model = newsModel;
    const news = await dbaseManager.create(object, model);
    if (!news) {
        sendErr(res, restResponses.commonSerever);
        return;
    }
    res.status(200).send(news);
});

// update news
router.put('/:id', async (req, res) => {
    const searchCriteria = {
        _id: req.params.id,
    };
    const updateData = {};
    newsField.forEach((it) => {
        if (req.body[it]) {
            updateData[it] = req.body[it];
        }
    });
    const updateProduct = await dbaseManager
        .update(searchCriteria, newsModel, updateData);
    if (!updateProduct) {
        sendErr(res, restResponses.incorrectData);
        return;
    }
    res.status(200).end();
});

// get news by id
router.get('/:id', async (req, res) => {
    const searchCriteria = {
        _id: req.params.id,
    };
    const news = await dbaseManager.find(searchCriteria, newsModel);
    if (!news) {
        sendErr(res, restResponses.commonSerever);
        return;
    }
    res.status(200).send(news);
});

// get one news page
router.get('/', async (req, res) => {
    const searchCriteria = req.query || null;
    const news = await dbaseManager.findProductPage(searchCriteria, newsModel);
    if (!news) {
        sendErr(res, restResponses.commonSerever);
        return;
    }
    res.status(200).send(news);
});

// delete news
router.delete('/:id', async (req, res) => {
    const newsId = req.params.id;
    const result = await dbaseManager
        .delete(newsId, newsModel);
    if (!result) {
        sendErr(res, restResponses.commonSerever);
        return;
    }
    res.status(200).end();
});

module.exports = router;
