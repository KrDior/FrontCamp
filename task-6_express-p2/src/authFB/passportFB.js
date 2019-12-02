/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const User = require('../models/usersFBSchema');
require('custom-env').env(true);

passport.use(
    'facebookToken',
    new FacebookTokenStrategy(
        {
            clientID: process.env.clientID,
            clientSecret: process.env.clientSecret,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                if (await User.findOne({ facebook_id: profile.id })) {
                    console.log('this account is already registered!');
                    return done(null, `this account is already registered: ${profile.id}`);
                }
                const email = profile.emails[0].value;
                const { id: facebook_id, displayName: name } = profile;
                const user = await User.create({
                    email,
                    facebook_id,
                    name,
                });
                await user.save();
                console.log(user);
                return done(null, user.toAuthJSON());
            } catch (error) {
                done(error, false, error.message);
            }
        },
    ),
);
