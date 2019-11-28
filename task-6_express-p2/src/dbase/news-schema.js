const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const newsSchema = new Schema({
    source: {
        id: {
            type: String,
            maxlength: 100,
            minlength: 1,
            required: true,
        },
        name: {
            type: String,
            maxlength: 50,
            minlength: 1,
            required: true,
        },
    },
    author: {
        type: String,
        maxlength: 64,
        minlength: 1,
        required: true,
    },
    title: {
        type: String,
        maxlength: 64,
        minlength: 1,
        required: true,
    },
    description: {
        type: String,
        maxlength: 500,
        minlength: 1,
        required: true,
    },
    url: {
        type: String,
        maxlength: 256,
        minlength: 5,
        required: true,
    },
    urlToImage: {
        type: String,
        maxlength: 256,
        minlength: 1,
        required: true,
    },
    publishedAt: {
        type: String,
        maxlength: 50,
        minlength: 2,
        required: true,
    },
    content: {
        type: String,
        maxlength: 500,
        minlength: 4,
        required: true,
    },
});
newsSchema.plugin(mongoosePaginate);
const newsModel = mongoose.model('News', newsSchema);

module.exports = {
    newsModel,
    newsSchema,
};
