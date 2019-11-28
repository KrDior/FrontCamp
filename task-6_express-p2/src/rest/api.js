const express = require('express');
const newsRouter = require('./news');

const router = express.Router();

router.use('/news', newsRouter);

router.use('/', (req, res) => { res.redirect('/'); });

module.exports = router;
