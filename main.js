$(document).ready(function(){
    $('.header').height($(window).height());
})

document.addEventListener("DOMContentLoaded", function() {
    // Find the button element by its ID
    var scrollButton = document.getElementById("button");

    // Add a click event listener to the button
    scrollButton.addEventListener("click", function() {
        // Calculate the distance to scroll down (e.g., half the window height)
        var scrollDistance = window.innerHeight;

        // Scroll down by the calculated distance
        window.scrollBy(0, scrollDistance);
    });
});
