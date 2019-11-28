const express = require('express');
const DbaseManager = require('../dbase/DBmanager');
const { newsModel } = require('../dbase/news-schema');
const { sendErr, restResponses } = require('./rest_responses');

const dbaseManager = new DbaseManager();
const router = express.Router();

// create news

router.post('/', async (req, res) => {
    const object = req.body;
    console.log('POST request is OK!', object);
    const news = 'POST response is OK!';

    res.status(200).send(news);
});

// update news

router.put('/:id', async (req, res) => {
    const newsId = req.params.id;
    console.log('PUT news by ID request is OK!', newsId);
    const messege = `PUT news by ID=${newsId} response is OK!`;
    if (!newsId || newsId === '123') {
        sendErr(res, restResponses.incorrectData);
        return;
    }
    res.status(200).send(messege);
});

// get news by id

router.get('/:id', async (req, res) => {
    const newsId = req.params.id;
    console.log('GET news by ID request is OK!', newsId);
    const news = `GET news by ID=${newsId} response is OK!`;
    if (!newsId || newsId === '123') {
        sendErr(res, restResponses.commonSerever);
        return;
    }
    res.status(200).send(news);
});

// get one news page

router.get('/', async (req, res) => {
    // const object = req.body;
    // console.log('GET news page request is OK!', object);
    // const news = 'GET news page response is OK!';

    // if (!object) {
    //     sendErr(res, restResponses.commonSerever);
    //     return;
    // }
    // res.status(200).send(news);
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
    console.log('DELETE request is OK!', newsId);
    const messege = `DELETE news by ID=${newsId} is OK!`;
    res.status(200).send(messege);
});

module.exports = router;
