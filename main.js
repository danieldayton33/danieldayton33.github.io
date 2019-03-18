$(document).ready(function(){
const buttonArray = ["CSS", "Javascript", "HTML", "nodeJS", "APIs"]

//bouncejs stuff
// const bounce = new Bounce();
// bounce.translate({
//     from: { x: 0, y: 0},
//     to: {x: 0, y: 0}
// });
// bounce.applyTo($(".nav"));

// const bounceLeft = new Bounce();
// bounceLeft.translate({
//     from: { x: 0, y: 0},
//     to: {x: 0, y: -150}
// });
// bounceLeft.applyTo($("#name-header")).then(function(){
//     createButtons();
// });
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
const projectArray = [
    {
        categories: ["javascript", "html", "css"],
        imageSrc: "assets/images/Photoz/gameofthrones.png",
        cardTitle: "Game of Thrones javaScript",
        cardText: "Simple javaScript game. Try to defeat all enemies.",
        url: "https://danieldayton33.github.io/gotgame/",
        gitHub: "https://github.com/danieldayton33/gotgame"
    },
    {
        categories: ["javascript", "html", "css"],
        imageSrc: "assets/images/Photoz/gameofthrones.png",
        cardTitle: "Game of Thrones javaScript",
        cardText: "Simple javaScript game. Try to defeat all enemies.",
        url: "https://danieldayton33.github.io/gotgame/",
        gitHub: "https://github.com/danieldayton33/gotgame"
    },
    {
        categories: ["javascript", "html", "css"],
        imageSrc: "assets/images/Photoz/gameofthrones.png",
        cardTitle: "Game of Thrones javaScript",
        cardText: "Simple javaScript game. Try to defeat all enemies.",
        url: "https://danieldayton33.github.io/gotgame/",
        gitHub: "https://github.com/danieldayton33/gotgame"
    },
    {
        categories: ["javascript", "html", "css"],
        imageSrc: "assets/images/Photoz/gameofthrones.png",
        cardTitle: "Game of Thrones javaScript",
        cardText: "Simple javaScript game. Try to defeat all enemies.",
        url: "https://danieldayton33.github.io/gotgame/",
        gitHub: "https://github.com/danieldayton33/gotgame",
    },
    {
        categories: ["javascript", "html", "css"],
        imageSrc: "assets/images/Photoz/gameofthrones.png",
        cardTitle: "Game of Thrones javaScript",
        cardText: "Simple javaScript game. Try to defeat all enemies.",
        url: "https://danieldayton33.github.io/gotgame/",
        gitHub: "https://github.com/danieldayton33/gotgame"
    }
];
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