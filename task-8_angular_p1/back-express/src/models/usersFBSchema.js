/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserFBSchema = new mongoose.Schema({
    name: String,
    facebook_id: String,
    email: String,
});

UserFBSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign(
        {
            email: this.email,
            name: this.name,
            facebook_id: this.facebook_id,
            id: this._id,
            exp: parseInt(expirationDate.getTime() / 1000, 10),
        },
        'secret',
    );
};

UserFBSchema.methods.toAuthJSON = function () {
    return {
        _id: this._id,
        email: this.email,
        name: this.name,
        facebook_id: this.facebook_id,
        token: this.generateJWT(),
    };
};

module.exports = mongoose.model('AuthFacebook', UserFBSchema);
