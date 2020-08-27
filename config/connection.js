// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT || 3306,
    user: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;