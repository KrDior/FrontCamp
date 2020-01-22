const express = require('express');
const DbaseManager = require('../dbase/DBmanager');
const { articleModel } = require('../models/articleSchema');
const { sendErr, restResponses } = require('./rest_responses');
const newsField = require('../dbase/newsField');
const auth = require('../authConfig/authJWT');

const dbaseManager = new DbaseManager();
const router = express.Router();

// create news
// router.post('/', auth.required, async (req, res) => {
router.post('/', async (req, res) => {
    const object = req.body;
    const model = articleModel;
    const news = await dbaseManager.create(object, model);
    if (!news) {
        sendErr(res, restResponses.commonSerever);
        return;
    }
    res.status(200).send(news);
});

// update news
router.put('/:id', auth.required, async (req, res) => {
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
        .update(searchCriteria, articleModel, updateData);
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
    const news = await dbaseManager.find(searchCriteria, articleModel);
    if (!news) {
        sendErr(res, restResponses.commonSerever);
        return;
    }
    res.status(200).send(news);
});

// get one news page
router.get('/', async (req, res) => {
    const searchCriteria = req.query || null;
    const news = await dbaseManager.findProductPage(searchCriteria, articleModel);
    if (!news) {
        sendErr(res, restResponses.commonSerever);
        return;
    }
    res.status(200).send(news);
});

// delete news
router.delete('/:id', auth.required, async (req, res) => {
    const newsId = req.params.id;
    const result = await dbaseManager
        .delete(newsId, articleModel);
    if (!result) {
        sendErr(res, restResponses.commonSerever);
        return;
    }
    res.status(200).end();
});

module.exports = router;
