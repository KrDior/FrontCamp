const express = require('express');
const passport = require('passport');
const newsRouter = require('./news');
const usersJWTRouter = require('./usersJWT');
const usersLocalRouter = require('./usersLocal')(passport);


const router = express.Router();

router.use('/news', newsRouter);
router.use('/userlocal', usersLocalRouter);
router.use('/usersjwt', usersJWTRouter);

router.use('/', (req, res) => { res.redirect('/'); });

module.exports = router;
