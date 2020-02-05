const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const newsSchema = new Schema({
    source: {
        id: {
            type: String,
            maxlength: 100,
            minlength: 1,
        },
        name: {
            type: String,
            maxlength: 100,
            minlength: 1,
        },
    },
    author: {
        type: String,
        maxlength: 500,
        minlength: 1,
    },
    title: {
        type: String,
        maxlength: 500,
        minlength: 1,
    },
    description: {
        type: String,
        maxlength: 500,
        minlength: 1,
    },
    url: {
        type: String,
        maxlength: 500,
        minlength: 5,
    },
    urlToImage: {
        type: String,
        maxlength: 500,
        minlength: 1,
    },
    publishedAt: {
        type: String,
        maxlength: 500,
        minlength: 2,
    },
    content: {
        type: String,
        maxlength: 500,
        minlength: 4,
    },
});
newsSchema.plugin(mongoosePaginate);
const newsModel = mongoose.model('News', newsSchema);

module.exports = {
    newsModel,
    newsSchema,
};
