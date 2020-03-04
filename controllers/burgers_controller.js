var express = require("express");

var router = express.Router();

//importing the burger model to use it's database functions
var burger = require("../models/burger.js");

//All routes

//Getting all burgers
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        
        res.render("index", hbsObject);
    })
})

//Creating new burger
router.post("/api/burgers", function(req,res){
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({ id: result.insertId })
    })
})

//Updating burgers devoured state
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;