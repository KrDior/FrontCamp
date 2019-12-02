/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const passport = require('passport');
const router = require('express').Router();
const auth = require('../authConfig/authJWT');

const { UsersModel } = require('../models/usersSchema');

// POST new user route (optional, everyone has access)
router.post('/', auth.optional, (req, res, next) => {
    const {
        body: { user },
    } = req;

    if (!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    const finalUser = new UsersModel(user);

    finalUser.setPassword(user.password);

    return finalUser
        .save()
        .then(() => res.json({ user: finalUser.toAuthJSON() }));
});

// POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
    const {
        body: { user },
    } = req;

    if (!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    return passport.authenticate(
        'local',
        { session: false },
        (err, passportUser, info) => {
            if (err) {
                return next(err);
            }

            if (passportUser) {
                const userData = passportUser;
                userData.token = passportUser.generateJWT();

                return res.json({ user: userData.toAuthJSON() });
            }

            return res.status(400).info;
        },
    )(req, res, next);
});

// GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
    const {
        payload: { id },
    } = req;

    return UsersModel.findById(id).then((user) => {
        if (!user) {
            return res.sendStatus(400);
        }

        return res.json({ user: user.toAuthJSON() });
    });
});

module.exports = router;
