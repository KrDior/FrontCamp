const DbaseManager = require('./DBmanager');
const mockedData = require('./mockedData');
const { newsModel } = require('../models/newsSchema');


const managerDB = new DbaseManager();

function addToBaseNews() {
    mockedData.articles.forEach((item, ind) => {
        console.log(ind);
        managerDB.create(item, newsModel);
    });
}
// addToBaseNews();

async function getItem() {
    // const content = await managerDB.find({filterName: 'Screen size'}, FilterModel);
    const content = await managerDB.find({ author: 'Cointelegraph By Will Heasman' }, newsModel);
    console.log(content);
}
// getItem();

async function getPageProduct() {
    const content = await managerDB.findProductPage({}, newsModel);
    console.log(content);
}
// getPageProduct();

async function deleteItem() {
    const content = await managerDB.delete('5cf0353ad866991f00228b7c', newsModel);
    console.log(content);
}
// deleteItem();

async function updateNews() {
    const content = await managerDB.update({ _id: '5de11d63adaeee22c864b9e7' }, newsModel, { author: 'Bonobo2' });
    console.log(content);
}
// updateNews();
