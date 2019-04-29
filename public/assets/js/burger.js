// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      name: $("#burgerName").val().trim(),
      devoured: false
    };

    // Send the POST request.2
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() =>{
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(document).on("click", '.devour-burger', event => { 
    let id = event.target.id;
    // console.log(id);

    $.ajax({
      url: '/api/burgers/' + id,
      type: 'PUT',
      data: event.target.id
    }).then(() => {
      console.log('deleted burger' + id);
      location.reload();
    });
  });
});
