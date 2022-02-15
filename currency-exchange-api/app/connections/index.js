var mysql = require("mysql2/promise");

var con = mysql.createPool({
    multipleStatements: true,
    host: "localhost",
    user: "root",
    password: "",
    database: "currency_exchange"
});

module.exports = con;