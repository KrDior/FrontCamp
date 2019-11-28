const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017';
const dbName = 'mypets';

mongoose.connect(`${url}/${dbName}`, {useNewUrlParser: true});

const kittySchema = new mongoose.Schema({
  name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);

var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

// const callback = (err, kitty) => {
//   console.log(kitty);
//   if (err) return console.error(err);
//   kitty.speak();
// }
//
// Kitten.create({
//   name: 'Boris'
// }, (err, res) => {
//   if (err) return console.error(err);
//   console.log(res);
// });
//
// fluffy.save(callback);
// Kitten.find({ name: /^fluff/ }, callback);
// Kitten.find({ name: 'fluffy' }).remove().exec();
//
// // executes immediately, passing results to callback
// Kitten.find({ name: 'fluffy' }, (err, docs) => {});
//
// // find kitty by id and execute immediately
// Kitten.findById(id, (err, kitty) => {});
//
// // find only 1 kitty
// Kitten.findOne({ name: 'fluffy' }, (err, kitty) => {});
//
// // return Promise but
// Kitten.findOne({ name: 'fluffy' }).then();
//
// // fully-fledged promise
// Kitten.where('age').gte(2).lte(5).exec().then();
//
//
// Kitten.findOneAndUpdate({ name: 'fluffy' }, { name: 'fluffy2' })
//   .then(callback)
//   .catch(errCallback)
//
//
// Kitten.findOneAndRemove({ name: 'fluffy' })
//   .then(callback)
//   .catch(errCallback)
//
//
// schema.pre('save', function(next) {
//   const err = new Error('something went wrong');
//   // If you call `next()` with an argument, that argument is assumed to be
//   // an error.
//   next(err);
// });
//
// schema.pre('save', function() {
//   // You can also return a promise that rejects
//   return new Promise((resolve, reject) => {
//     reject(new Error('something went wrong'));
//   });
// });
//
// schema.pre('save', function() {
//   // You can also throw a synchronous error
//   throw new Error('something went wrong');
// });
//
// schema.pre('save', async function() {
//   await Promise.resolve();
//   // You can also throw an error in an `async` function
//   throw new Error('something went wrong');
// });
