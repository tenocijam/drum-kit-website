

// Detecting button presses
var noOfBtn = (document.querySelectorAll(".drum")).length;
console.log(noOfBtn);

for (var i=0; i<noOfBtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
}


// Detecting key presses
document.addEventListener("keypress", function(event) {
    playSound(event.key);
});


// Function that plays sound
function playSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
        break;

        case "a":
            new Audio("sounds/tom-2.mp3").play();
        break;

        case "s":
            new Audio("sounds/tom-3.mp3").play();
        break;

        case "d":
            new Audio("sounds/tom-4.mp3").play();
        break;

        case "j":
            new Audio("sounds/snare.mp3").play();
        break;

        case "k":
            new Audio("sounds/crash.mp3").play();
        break;

        case "l":
            new Audio("sounds/kick-bass.mp3").play();
        break;
        default: console.log(key);
    }
}
