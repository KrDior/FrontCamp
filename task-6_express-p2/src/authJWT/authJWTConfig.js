/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { usersJWTModel } = require('../models/usersJWTSchema');

passport.use(
    new LocalStrategy(
        {
            usernameField: 'user[email]',
            passwordField: 'user[password]',
        },
        (email, password, done) => {
            usersJWTModel
                .findOne({ email })
                .then((user) => {
                    if (!user || !user.validatePassword(password)) {
                        return done(null, false, {
                            errors: { 'email or password': 'is invalid' },
                        });
                    }
                    return done(null, user);
                })
                .catch(done);
        },
    ),
);
