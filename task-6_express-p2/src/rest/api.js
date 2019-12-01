const express = require('express');
const newsRouter = require('./news');
const usersRouter = require('./usersJWT');


const router = express.Router();

router.use('/news', newsRouter);
router.use('/users', usersRouter);

router.use('/', (req, res) => { res.redirect('/'); });

module.exports = router;
