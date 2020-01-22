const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const articleSchema = new Schema({
    id: {
        type: String,
    },
    isLocalNews: {
        type: Boolean,
    },
    author: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    },
    urlToImage: {
        type: String,
    },
    publishedAt: {
        type: String,
    },
    content: {
        type: String,
    },
    pictureFile: {
        data: Buffer,
        contentType: String,
    },
});
articleSchema.plugin(mongoosePaginate);
const articleModel = mongoose.model('News', articleSchema);

module.exports = {
    articleModel,
    articleSchema,
};
