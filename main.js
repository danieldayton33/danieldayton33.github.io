$(document).ready(function(){
$("#name-header").on("click", ()=>{
    $("#about").hide();
    $("#portfolio").hide();
    $("#start-slider").show();
});
$("#about-button").on("click", ()=>{
    $("#start-slider").hide();
    $("#portfolio").hide();
    $("#about").show();
});
$("#portfolio-button").on("click", ()=>{
    $("#start-slider").hide();
    $("#about").hide();
    $("#portfolio").show();
});
$("#contact-button").on("click", ()=>{
    $("#start-slider").hide();
    $("#about").hide();
    $("#portfolio").hide();
    $("#contact-modal").modal('toggle');
});
$("#carousel").on("click", ()=>{
    $("#start-slider").hide();
    $("#about").hide();
    $("#portfolio").show();
});
$("#mail-submit").on("click", ()=>{
    $(".modal-body").empty();
    const newP = $("<p>").text("Your email has been sent");
    $(".modal-body").append(newP);
});
});