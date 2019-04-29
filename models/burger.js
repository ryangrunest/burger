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
  update: (colVals, cond, cb) => {
    console.log('Burger stuff:');
    colVals = `DEVOURED=${colVals}`;
    cond = `id='${cond}'`;
    console.log(colVals);
    console.log(cond);
    orm.update('burgers', colVals, cond, res => {
      cb(res);
    });
  },
  delete: () => {
    orm.delete('burgers', )
  }

};

module.exports = burger;