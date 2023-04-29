const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  price: { type: Number, min: [1, "invalid price"], required: true },
  discountPercentage: {
    type: Number,
    min: [0, "invalid min discount"],
    max: [50, "invalid max discount"],
  },
  rating: {
    type: Number,
    min: [0, "invalid min rating"],
    max: [5, "invalid max rating"],
    default: 0
  },
  stock: Number,
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
