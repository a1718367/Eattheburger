$(function(){
    $("#newBurger").on("submit", function(event){
        event.preventDefault();
    
        const newBurger = {
            burger: $("#burgerName").val().trim(),
            details: $('#burgerDetails').val().trim(),
        };
        
    
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("New Burger Added.")
            location.reload();
        })
    });
    //To Eat
	$(".devourButton").on("click", function (event) {
		const id = $(this).data("id");
		const devouredBurger = {
			devoured: 1,
		};
		// Send the PUT request
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: devouredBurger,
		}).then(() => {
			console.log("devoured a burger");
			// Reload the page
			location.reload();
		});
    });
    //To Return
    $(".returnButton").on("click", function (event) {
		const id = $(this).data("id");
		const devouredBurger = {
			devoured: 0,
		};
		// Send the PUT request
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: devouredBurger,
		}).then(() => {
			console.log("returned a burger");
			// Reload the page
			location.reload();
		});
	});
})

