// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "qn0cquuabmqczee2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    port: 3306,
    user: "havu4sprheh8nc7c",
    password: "ecu68q3lstyn6xja",
    database: "kclx6u90ypoqbzw0"
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