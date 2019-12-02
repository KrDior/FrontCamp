/* eslint-disable no-unused-vars */
const express = require('express');
const jwt = require('express-jwt');
const passport = require('passport');
const newsRouter = require('./newsRouter');
const usersRouter = require('./usersJWTRouter');
const usersFBRouter = require('./facebookRouter');

const router = express.Router();

router.use('/news', newsRouter);
router.use('/users', usersRouter);
router.use('/facebook', usersFBRouter);

router.use('/', (req, res) => {
    res.redirect('/');
});

module.exports = router;
