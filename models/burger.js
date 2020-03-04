var orm = require("../config/orm.js");

var burger = {
    //call the orm for all burgers
    all: function(cb) {
        orm.all("burgers", function(res){
            console.log(res)
            cb(res);
        })
    },
    //call the orm for creating new burgers
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        })
    },
    //cal the orm for updating burgers 
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res){
            cb(res)
        })
    }
}

module.exports = burger;