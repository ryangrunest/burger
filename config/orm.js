const connection = require('../config/connection.js');


const orm = {
    all: (tableInput, cb) => {
        let queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, res) => {
            if (err) cb(err);
            cb(res);
        }) 
    },
    add: (table, cols, vals, cb) => {
        let queryString = 
        `INSERT INTO 
        ${table} (${cols}) 
        VALUES (${vals})`;
        connection.query(queryString, (err, res) => {
            if (err) cb(err);
            cb(res);
        })
    }
}

module.exports = orm;