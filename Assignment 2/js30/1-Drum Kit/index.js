var boom = new Audio("sounds/boom.wav");
var clap = new Audio("sounds/clap.wav");
var hihat = new Audio("sounds/hihat.wav");
var kick = new Audio("sounds/kick.wav");
var openhat = new Audio("sounds/openhat.wav");
var ride = new Audio("sounds/ride.wav");
var snare = new Audio("sounds/snare.wav");
var tink = new Audio("sounds/tink.wav");
var tom = new Audio("sounds/tom.wav");


window.addEventListener("keydown", function (e) {
    // console.log(e.keyCode);

    document.querySelector(`div[data-key="${e.keyCode}"]`).classList.add("pressed");

    setTimeout(function () {

        document.querySelector(`div[data-key="${e.keyCode}"]`).classList.remove("pressed");

    } , 200);

    switch (e.keyCode) {


        case 65: clap.play();
            clap.currentTime = 0;
           
            break;

        case 83: hihat.play();
            hihat.currentTime = 0;
            break;

        case 68: kick.play();
            kick.currentTime = 0;
            break;

        case 70: openhat.play();
            openhat.currentTime = 0;
            break;

        case 71: boom.play();
            boom.currentTime = 0;
            break;

        case 72: ride.play();
            ride.currentTime = 0;
            break;

        case 74: snare.play();
            snare.currentTime = 0;
            break;

        case 75: tom.play();
            tom.currentTime = 0;
            break;

        case 76: tink.play();
            tink.currentTime = 0;
            break;





    }



})