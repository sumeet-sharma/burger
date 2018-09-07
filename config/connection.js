// Connecting Node to burgers_db in MySQL 
// and then exporting the connection
var mysql = require('mysql');
var connection;

// Localhost connection
connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'burgers_db',
    port: 3306
  });

module.exports = connection; 