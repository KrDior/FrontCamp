const mongoose = require('mongoose');
const DbaseManager = require('./DBmanager');
const mockedData = require('./mockedData');
const { newsModel } = require('./news-schema');


const managerDB = new DbaseManager();

function addToBaseNews() {
    mockedData.articles.forEach((item, ind) => {
        console.log(ind);
        managerDB.create(item, newsModel);
    });
}
addToBaseNews();

async function getItems() {
    // const content = await managerDB.findAllItems(FilterModel);
    const content = await managerDB.findAllItems(newsModel);
    console.log(content);
}
// getItems();

async function getItem() {
    // const content = await managerDB.find({filterName: 'Screen size'}, FilterModel);
    const content = await managerDB.find({manufacturer: 'Samsung'}, newsModel);
    console.log(content);
}
// getItem();

async function getPageProduct() {
    const content = await managerDB.findProductPage({}, newsModel);
    console.log(content);
}
// getPageProduct();

async function updateItem() {
    const content = await managerDB.update({ filterName: 'Screen size' }, newsModel, { filterName: 'Screen size'});
    console.log(content);
}
// updateItem();

async function deleteItem() {
    const content = await managerDB.delete('5cf0353ad866991f00228b7c', newsModel);
    console.log(content);
}
// deleteItem();

async function updateProduct() {
    const content = await managerDB.update({ model: '24MK601' }, newsModel, { model: '24MK60' });
    console.log(content);
}
// updateProduct();
