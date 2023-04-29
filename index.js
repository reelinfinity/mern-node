require("dotenv").config();
// EXPRESS
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const server = express();
const path = require("path");
const { productRouter } = require("./routes/product.js");
const { userRouter } = require("./routes/user.js");

// DB
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("DB Connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Schema

// CRUD Operations

// bodyParser
server.use(cors());
server.use(express.json());
// server.use(express.urlencoded());

server.use(morgan("default"));
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use("/products", productRouter);
server.use("/users", userRouter);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// CRUD Commands
// MVC Model View Controller
// Create POST /product
server.listen(process.env.PORT, () => {
  console.log("server started");
});
