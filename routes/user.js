const express = require('express');
const userRouter = express.Router();
const {
  createUser,
  getUsers,
  getUser,
  replaceUser,
  updateUser,
  deleteUser,
} = require('../controller/user.js');
userRouter
  .post('/', createUser)
  .get('/', getUsers)
  .get('/:id', getUser)
  .put('/:id', replaceUser)
  .patch('/:id', updateUser)
  .delete('/:id', deleteUser);

module.exports = { userRouter };
