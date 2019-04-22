const orm = require('../config/orm.js');

const burger = {
  all: (cb) => {
    orm.all('burgers', res => {
      cb(res);
    });
  },
  add: (colVals, condition, cb) => {
    orm.add('cats', colVals, condition, res => {
      cb(res);
    });
  }
};

module.exports = burger;