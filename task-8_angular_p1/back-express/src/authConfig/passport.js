/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local');

const Users = mongoose.model('Users');

passport.use(
    new LocalStrategy(
        {
            usernameField: 'login',
            passwordField: 'password',
        },
        (login, password, done) => {
            Users
                .findOne({ login })
                .then((user) => {
                    if (!user || !user.validatePassword(password)) {
                        return done(null, false, {
                            errors: { 'login or password': 'is invalid' },
                        });
                    }
                    return done(null, user);
                })
                .catch(done);
        },
    ),
);
