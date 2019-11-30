/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { newsModel } = require('../models/newsSchema');
const { usersModel } = require('../models/usersSchema');

const dbaseConfig = {
    mongoDB:
        'mongodb+srv://KrDior:xzx123654@cluster0-qdqpg.mongodb.net/test?retryWrites=true&w=majority',
    models: {
        newsModel,
    },
};

passport.use(
    new LocalStrategy(
        {
            usernameField: 'user[email]',
            passwordField: 'user[password]',
        },
        (email, password, done) => {
            usersModel
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

module.exports = dbaseConfig;
