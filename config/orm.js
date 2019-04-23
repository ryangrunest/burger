const connection = require('../config/connection.js');

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

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
        `INSERT INTO ${table} (${cols}) VALUES ('${vals[0]}',${vals[1]})`;
        connection.query(queryString, (err, res) => {
            if (err) cb(err);
            cb(res);
        })
    },
    update: (table, colVals, cond, cb) => {
        const queryString = `UPDATE ${table} SET ${objToSql(colVals)} WHERE ${cond}`;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
    delete: function(table, condition, cb) {
        const queryString = `DELETE FROM ${table} WHERE ${condition}`;

        connection.query(queryString, function(err, result) {
            if (err) {
            throw err;
            }

            cb(result);
        });
    }
}

module.exports = orm;