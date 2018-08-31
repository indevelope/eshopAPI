const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/eshop');

const faker = require('faker');

const ProductModel = mongoose.model('Product', new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number },
  image: { type: String }
}));

for (let i = 0; i<10; i++) {
  ProductModel.create({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: 'http://placehold.it/300x300.png/eee'
  });
};