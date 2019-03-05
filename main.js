$(document).ready(function(){
const buttonArray = ["CSS", "Javascript", "HTML", "nodeJS", "APIs"]

const createButtons = ()=> {
    buttonArray.forEach(category =>{
        const newButton = $('<button>',
            {
            type: 'button',
            class: 'btn btn-light',
            id: 'filter-button',
            text: category,
            on: {click : ()=>{
                clearCards(category);
                }
            }
            });
    $('#filter-buttons').append(newButton);  
    });
}
createButtons();

const clearCards = (category)=> {
    console.log(category);
    if($(".card").hasClass(category) === false){
        console.log("HAS CLASS");
        console.log($(this));
        $(this).hide();
    }
    if($(".card").hasClass(category)){
        console.log("DOESNOT HAVE CLASS");
        console.log($(this));
        $(this).hide();
}
}
//on-click functions to hide different sections
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
    $("#start-slider").show();
    $("#about").hide();
    $("#portfolio").hide();
    $("#contact-modal").modal('toggle');
});
$(".carousel-inner").on("click", ()=>{
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