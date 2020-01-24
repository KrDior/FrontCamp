const DbaseManager = require('./DBmanager');
const mockedData = require('./mockedData');
const { articleModel } = require('../models/articleSchema');


const managerDB = new DbaseManager();

function addToBaseNews() {
    mockedData.articles.forEach((item, ind) => {
        console.log(ind);
        managerDB.create(item, articleModel);
    });
}
// addToBaseNews();

async function getItem() {
    // const content = await managerDB.find({filterName: 'Screen size'}, FilterModel);
    const content = await managerDB.find({ author: 'Cointelegraph By Will Heasman' }, articleModel);
    console.log(content);
}
// getItem();

async function getPageProduct() {
    const content = await managerDB.findProductPage({}, articleModel);
    console.log(content);
}
// getPageProduct();

async function deleteItem() {
    const content = await managerDB.delete('5e2acb4fcfde5c0d84cf8447', articleModel);
    console.log(content);
}
// deleteItem();

async function updateNews() {
    const content = await managerDB.update({ _id: '5e2acb4fcfde5c0d84cf8447' }, articleModel, { author: 'Bonobo2' });
    console.log(content);
}
// updateNews();
