const Goods = require('mongoose').model('Goods', {
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  winner: {
    type: String,
    default: '',
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  participants: {
    default: [],
    type: [String],
  },
});

module.exports = Goods;