const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users = data.users;

const createUser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(201).json(req.body);
};

const getUsers = (req, res) => {
  res.json(users);
};

const getUser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((u) => u.id === id);
  res.json(user);
};

const replaceUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((u) => u.id === id);
  users.splice(userIndex, 1, { ...req.body, id });
  res.status(201).json({ user: 'updated' });
};

const updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((u) => u.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(201).json({ user: 'updated' });
};

const deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((u) => u.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.status(201).json({ type: 'DELETE', user });
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  replaceUser,
  updateUser,
  deleteUser,
};
