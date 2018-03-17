const Users = require('mongoose').model('Users', {
  picture: {
    large: {
      type: String,
      default: 'http://via.placeholder.com/128',
    },
    medium: {
      type: String,
      default: 'http://via.placeholder.com/72',
    },
    thumbnail: {
      type: String,
      default: 'http://via.placeholder.com/48',
    },
  },
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  money: {
    type: Number,
    default: 0,
  },
});

module.exports = Users;
