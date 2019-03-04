$(document).ready(function(){
$("#about-button").on("click", ()=>{
    $("#portfolio").hide();
    $("#about").show();
});
$("#portfolio-button").on("click", ()=>{
    $("#about").hide();
    $("#portfolio").show();
});
$("#contact-button").on("click", ()=>{
    $("#about").hide();
    $("#portfolio").hide();
    $("#contact-modal").modal('toggle');
});
// $("#mail-submit").on("click", ()=>{
//     $(".modal-body").empty();
//     const newP = $("<p>").text("Your email has been sent");
//     $(".modal-body").append(newP);
// });
});