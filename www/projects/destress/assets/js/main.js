$(function() {

    $( ".circle" ).click(function() {
        $(".container").append("<div class='item circle'> click me </div>");
    });

    $( ".circle" ).click(function() {
        $(this).toggleClass("item");
    });


});