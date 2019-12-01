/* eslint-disable consistent-return */
/* eslint-disable func-names */
const LocalStrategy = require('passport-local').Strategy;
const bCrypt = require('bcrypt-nodejs');
const User = require('../models/userLocalSchema');

// Generates hash using bCrypt
const createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

module.exports = function (passport) {
    passport.use(
        'signup',
        new LocalStrategy(
            {
                passReqToCallback: true,
            },
            (req, username, password, done) => {
                const findOrCreateUser = function () {
                    // find a user in Mongo with provided username
                    User.findOne({ username }, (err, user) => {
                        // In case of any error, return using the done method
                        if (err) {
                            console.log(`Error in SignUp: ${err}`);
                            return done(err);
                        }
                        // already exists
                        if (user) {
                            console.log(
                                `User already exists with username: ${username}`,
                            );
                            return done(
                                null,
                                false,
                                req.flash('message', 'User Already Exists'),
                            );
                        }
                        // if there is no user with that email
                        // create the user
                        const newUser = new User();

                        // set the user's local credentials
                        newUser.username = username;
                        newUser.password = createHash(password);
                        newUser.email = req.param('email');
                        newUser.firstName = req.param('firstName');
                        newUser.lastName = req.param('lastName');

                        // save the user
                        newUser.save((error) => {
                            if (error) {
                                console.log(`Error in Saving user: ${error}`);
                                throw err;
                            }
                            console.log('User Registration succesful');
                            return done(null, newUser);
                        });
                    });
                };
                // Delay the execution of findOrCreateUser and execute the method
                // in the next tick of the event loop
                process.nextTick(findOrCreateUser);
            },
        ),
    );
};
