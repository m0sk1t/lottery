const Goods = require('../../models/goods');

const newGood = (req, res) => Goods.create(req.body, (err, Good) => {
  if (err) return res.status(500).json(err);
  res.json(Good);
});

const getGood = (req, res) => Goods.findById(req.params.id).lean().exec((err, Goods) => {
  if (err) return res.status(500).json(err);
  res.json(Goods);
});

const getGoods = (req, res) => Goods.find({}).lean().exec((err, Goods) => {
  if (err) return res.status(500).json(err);
  res.json(Goods);
});

const changeGood = (req, res) => Goods.findById(req.params.id, (err, Good) => {
  if (err) return res.status(500).json(err);
  const uid = req.params.uid;
  if (Good.winner) {
    return res.json(Good);
  } else {
    const index = Good.participants.indexOf(uid);
    if (index === -1) {
      Good.participants.push(uid);
    } else {
      Good.participants.splice(index, 1);
    }
    if (Good.participants.length * Good.ticketPrice >= Good.price) {
      Good.winner = Good.participants[Math.floor(Math.random() * Good.participants.length)];
    }
    Good.save((err, Good) => {
      if (err) return res.status(500).json(err);
      res.json(Good);
    });
  }
});

const deleteGood = (req, res) => Goods.findByIdAndRemove(req.params.id, (err, Good) => {
  if (err) return res.status(500).json(err);
  res.json(Good);
});

module.exports = {
  newGood,
  getGood,
  getGoods,
  changeGood,
  deleteGood
};