const mongoose = require('mongoose');

const UserFBSchema = new mongoose.Schema({
    name: String,
    facebook_id: String,
    email: String,

});

module.exports = mongoose.model('AuthFacebook', UserFBSchema);
