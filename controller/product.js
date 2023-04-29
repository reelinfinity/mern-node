// const fs = require("fs");
const { Product } = require("../model/product");
// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

// Create
const createProduct = async (req, res) => {
  console.log(req.body);
  const product = new Product(req.body);
  try {
    const resp = await product.save();
    res.status(201).json(resp);
  } catch (e) {
    res.status(400).json(e);
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (e) {
    res.status(400).json(e);
  }
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};

const replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (e) {
    res.status(400).json(e);
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (e) {
    res.status(400).json(e);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(product);
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
