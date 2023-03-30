                                //canvas var
let canvas;
let canvasWidth = 1450;
let canvasHeight = 850;
let context;

                                //player var
let playerWidth = 286;
let playerHeight = 500;
let playerX = 100;
let playerY = canvasHeight - playerHeight;
let playerImg;

let player = {
    x : playerX,
    y : playerY,
    width : playerWidth,
    height : playerHeight
}

                                //boxes var
let randomBoxes = [];
console.log(randomBoxes);

let boxOneWidth = 400;
let boxTwoWidth = 400;

let boxesHeight = 400;
let boxesX = 1450;
let boxesY = canvasHeight - boxesHeight;

let boxOneImg;
let boxTwoImg;

                                //game physics on canvas/movement
let speedX = -3;
let speedY = 0;
let gravity = .4;

let gameOver = false;
let score = 0;


window.onload = function() {
    canvas = document.getElementById("canvas");
    canvas.height = canvasHeight;
    canvas.width = canvasWidth;

    context = canvas.getContext("2d");

    playerImg = new Image();
    playerImg.src = "./images/Resting.png";
    playerImg.onload = function() {

    context.drawImage (
        playerImg, player.x,player.y, player.width, player.height);
    }

    boxOneImg = new Image ();
    boxOneImg.src = "./images/Obstacle_1.png"

    boxTwoImg = new Image ();
    boxTwoImg.src = "./images/Obstacle_2.png"

    requestAnimationFrame(boxAnimation);
    setInterval (animateRandomBoxes, 1000);
    document.addEventListener("keydown", movePlayer);
}

function boxAnimation(){
    if (gameOver) {
        return;
    }
    requestAnimationFrame(boxAnimation);

    context.clearRect ( 0, 0, canvas.width, canvas.height );
                                                    //player
    speedY += gravity;
    player.y = Math.min( player.y + speedY, playerY); // this will ensure player will stay down after jumping.
    
    context.drawImage ( playerImg, player.x, player.y, player.width,  player.height );
                                                    //boxes
    for ( let i = 0; i < randomBoxes.length; i++) {
        let boxes = randomBoxes [i];
        boxes.x += speedX;
        context.drawImage(boxes.img, boxes.x, boxes.y, boxes.width, boxes.height);

        if(whenCollission(player, boxes)) {
            gameOver = true;
            playerImg.src ="./images/milk.png"
            playerImg.onload = function(){
                context.drawImage(playerImg, player.x, player.y, player.width, player.height);
            }
        }
    }
}

function movePlayer(e) {

    if (gameOver) {
        return;
    }

    if ((e.code == "Space" || e.code == "ArrowUp") && player.y == playerY) {
        speedY = -20;
    }
}


function animateRandomBoxes (){

    if (gameOver) {
        return;
    }

    let boxes = {
        img : null,
        x : boxesX,
        y : boxesY,
        width : null,
        height : boxesHeight
    }

    let loadBoxes = Math.random();

    if ( loadBoxes > .95 ) {
        boxes.img = boxTwoImg;
        boxes.width = boxTwoWidth;
        randomBoxes.push( boxes );
    }
    else if ( loadBoxes > .70 ) {
        boxes.img = boxOneImg;
        boxes. width = boxOneWidth;
        randomBoxes.push( boxes );
    }
   
    if (randomBoxes.leght > 5 ) {  
        randomBoxes.shift();        // this will help limit randomBoxes's "array-objrects" to accumalate up to 5.
    }
}

function whenCollission( a, b ) {      // this will be when player hit obstcle.
    return  a.x < b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y;
}




