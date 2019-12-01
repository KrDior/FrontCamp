/* eslint-disable no-unused-vars */
const express = require('express');
const jwt = require('express-jwt');
const passport = require('passport');
const newsRouter = require('./news');
const usersRouter = require('./usersJWT');

const router = express.Router();

router.use('/news', newsRouter);
router.use('/users', usersRouter);

// FB authentication
router.post(
    '/facebook',
    passport.authenticate('facebookToken', { session: false }),
    (req, res) => {
        if (req.user) {
            res.json(req.user);
        } else {
            res.status(400).json({ error: 'Failed to authenticate user' });
        }
    },
);

router.use('/', (req, res) => {
    res.redirect('/');
});

module.exports = router;
