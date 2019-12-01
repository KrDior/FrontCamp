/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const User = require('../models/usersFBSchema');
require('custom-env').env(true);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

passport.use(
    'facebookToken',
    new FacebookTokenStrategy(
        {
            clientID: process.env.clientID,
            clientSecret: process.env.clientSecret,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                if (await User.findOne({ facebook_id: profile.id })) { return console.log('this account is already registered!'); }
                const email = profile.emails[0].value;
                const { id: facebook_id, displayName: name } = profile;
                const user = await User.create({
                    email,
                    facebook_id,
                    name,
                });
                await user.save();

                console.log(user);
            } catch (error) {
                done(error, false, error.message);
            }
        },
    ),
);
