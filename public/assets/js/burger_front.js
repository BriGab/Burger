$(function(){
    // Change the status of devoured = 0 to devoured = 1
    $(".change-devoured").on("click", function(event){
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured")

        var newDevouredState = {
            devoured: newDevoured
        }

    //Send the put request
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
    }).then(function(){
        console.log("changed burger to ", newDevoured)

        //reload page to get updated burger
        location.reload();
    })

    });

    // creating a new burger
    $(".create-form").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
    }
    console.log(name)

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function(){
        console.log("created new burger")

        // reload page to get new burger
        location.reload();
    })
    });

})