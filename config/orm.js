var connection = require("../config/connection.js");


// giving the query question marks to insert variables needed
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push("?")
    }
    console.log(arr)
    return arr.toString();
}

// converting key/value pairs to SQL syntax
function objToSql(ob) {
    var arr =[];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)){

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
            console.log(key)
            console.log(value)
        }
    }

    return arr.toString();
}

var orm = {
    //query to get all burgers
    all: function(tableInput, cb) {
        console.log(tableInput)
        var queryString = "SELECT * FROM " + tableInput + ";"
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            } 
            cb(result)
        }); 
    },
    //query to create a new burger
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "Values (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    //query to update the devoured state
    update: function(table, objColVals, condition, cb) {
        queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result){
            if(err) {
                throw err;
            }

            cb(result);
        })
    }

}
module.exports = orm;