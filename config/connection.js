var mysql = require("mysql");
require('dotenv').config()

console.log(process.env.DATABASE_NAME)

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME

})

connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
      console.log("connected as id " + connection.threadId);
})

module.exports = connection;