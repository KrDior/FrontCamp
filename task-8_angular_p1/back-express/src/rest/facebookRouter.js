/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const auth = require('../authConfig/authJWT');

const { UsersModel } = require('../models/usersFBSchema');

// FB POST new user route (optional, everyone has access)
router.post(
    '/',
    auth.optional,
    passport.authenticate('facebookToken', { session: false }),
    (req, res, next) => {
        if (req.user) {
            return res.json({ user: req.user });
        }
        return res.status(400).json({ error: 'Failed to authenticate user' });
    },
);

module.exports = router;
