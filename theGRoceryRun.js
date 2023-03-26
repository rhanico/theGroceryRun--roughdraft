let gameWindow;
let gameWindowWidth = 2000;
let gameWindowHeight = 1300;
let content;

let playerWidth;
let playerHeight;
let playerX;
let playerY = gameWindowHeight - playerHeight;
let playerIcon;

let player = {
    x : playerX,
    y : playerY,
    width : playerWidth,
    height : playerHeight
}



window.onload = function() {
    gameWindow = document.getElementById("gameWindow");
    gameWindow.width = gameWindowWidth;
    gameWindow.height = gameWindowHeight;

    console.log(gameWindow);
}