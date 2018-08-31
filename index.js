const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const app = express();
const router = express.Router();

const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/eshop');

app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride());

restify.serve(router, mongoose.model('Product', new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number },
  image: { type: String }
})));

app.use(router);

app.listen(3000, () => {
  console.log('Express server listening on port 3000')
});