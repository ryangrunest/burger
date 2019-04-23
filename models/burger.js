const orm = require('../config/orm.js');

const burger = {
  all: (cb) => {
    orm.all('burgers', res => {
      cb(res);
    });
  },
  add: (colVals, condition, cb) => {
    orm.add('burgers', colVals, condition, res => {
      cb(res);
    });
  },

};

module.exports = burger;