const express = require('express');
const productRouter = express.Router();
const {
  createProduct,
  getProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} = require('../controller/product.js');

productRouter
  .post('/', createProduct)
  .get('/', getProducts)
  .get('/:id', getProduct)
  .put('/:id', replaceProduct)
  .patch('/:id', updateProduct)
  .delete('/:id', deleteProduct);

module.exports = { productRouter };
