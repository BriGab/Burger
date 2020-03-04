const express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//gives app permission to use things from the public file 
app.use(express.static("public"));

//Set handlebars
var exphbs = require("express-handlebars");

//Set default handlbars page
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give server access to them
var routes = require("./controllers/burgers_controller");

app.use(routes);

//Start our server so it can begin listening to client requests
app.listen(PORT, function(){
    //Log to let us know our server has started 
    console.log("Server listening on: https://localhost:" + PORT);
})