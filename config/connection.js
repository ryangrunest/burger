// Set up MySQL connection.
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'cheese',
        database: 'burger_db'
    });
};

// make connection
connection.connect(err => {
    if (err) return console.log(`error connecting ${err.stack}`);

    console.log(`connected as id ${connection.threadId}`);
})

// export connection for orm to use
module.exports = connection;