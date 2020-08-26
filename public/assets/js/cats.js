$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState

    if (newDevoured === 0) {
      newDevouredState = {
        devoured: 1
      }
    } else {
      newDevouredState = {
        devoured: 0
      }
    }

    // var newDevouredState = {
    //   devoured: newDevoured
    // };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to ", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bu").val().trim(),
      isDevoured: $("[name=devoured]:checked").val().trim()
    };

    console.log(newBurger);

    // TODO: FIX ISSUE WITH POST REQUEST. 

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});