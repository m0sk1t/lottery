const Users = require('../../models/users');

const newUser = (req, res) => Users.create(req.body, (err, User) => {
  if (err) return res.status(500).json(err);
  res.json(User);
});

const getUser = (req, res) => Users.findById(req.params.id).lean().exec((err, Users) => {
  if (err) return res.status(500).json(err);
  res.json(Users);
});

const getUsers = (req, res) => Users.find({}).lean().exec((err, Users) => {
  if (err) return res.status(500).json(err);
  res.json(Users);
});

const changeUser = (req, res) => Users.findById(req.params.id, (err, User) => {
  if (err) return res.status(500).json(err);
  if (!req.params.participated && User.money >= req.params.ticketPrice) {
    User.money -= req.params.ticketPrice;
  } else {
    User.money += req.params.ticketPrice;
  }
  User.save((err, User) => {
    if (err) return res.status(500).json(err);
    res.json(User);
  });
});

const deleteUser = (req, res) => Users.findByIdAndRemove(req.params.id, (err, User) => {
  if (err) return res.status(500).json(err);
  res.json(User);
});

module.exports = {
  newUser,
  getUser,
  getUsers,
  changeUser,
  deleteUser
};