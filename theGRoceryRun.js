let gameWindow;
let gameWindowWidth = 750;
let gameWindowHeight = 250;
let windowContent;

                // player variables.
let playerWidth = 88;
let playerHeight = 94;
let playerX = 50;
let playerY = gameWindowHeight - playerHeight;
let playerCharacter;

let player = {
    x : playerX,
    y : playerY,
    width : playerWidth,
    height : playerHeight
}


                //obstacles boxes variables with array.
let obstacleBoxes = [];

let obstacleBoxesOneWidth = 34;
let obstacleBoxesTwoWidth = 69;

let obstacleBoxesHeight = 70;
let obstacleBoxesX = 700;
let obstacleBoxesY = gameWindowHeight - obstacleBoxesHeight;

let obstacleBoxesOneIcon;
let obstacleBoxesTwoIcon;




                // this is my gameWindow (canvas)  - .onload function.
window.onload = function() {
    gameWindow = document.getElementById("gameWindow");
    gameWindow.width = gameWindowWidth;
    gameWindow.height = gameWindowHeight;

             windowContent = gameWindow.getContext("2d");  //this will used to draw on the canvas.


               // this is my playerCharacter - .onload function.
    playerCharacter = new Image();
    playerCharacter.src="./images/Resting.png";
    playerCharacter.onload = function() {
        
        windowContent.drawImage(playerCharacter,player.x, player.y, player.width, player.height);
    }
                // this my obstacleBoxes - .onload function.
    
    obstacleBoxOneIcon = new Image();
    obstacleBoxOneIcon.src = "";

    obstacleBoxTwoIcon = new Image();
    obstacleBoxTwoIcon.src = "";


    requestAnimationFrame( loadCharacters );
    setInterval( runObstacleBoxes, 1000); //1 sec
}


function loadCharacters() {
    requestAnimationFrame( loadCharacters );
                // player .draw funtion
    windowContent.drawImage(playerCharacter, player.x, player.y, player.width, player.height);
               // obstaleBoxes .draw function/ looping the obstacleBoxes.
    for ( let i = 0; i < obstacleBoxes.length; i++) {
        let randomBoxes = obstacleBoxes[i];

       /* windowContent.drawImage(
            randomBoxes.Image,
            randomBoxes.x, 
            randomBoxes.y,
            randomBoxes.width, 
            randomBoxes.height);
       */
            windowContent.drawImage(randomBoxes.img, randomBoxes.x, randomBoxes.y, randomBoxes.width, randomBoxes.height);

    }
}


function runObstacleBoxes() {

    let randomBoxes = {
        img : null,
        x: obstacleBoxesX,
        y: obstacleBoxesY,
        width: null,
        height: obstacleBoxesHeight
    }
                 // this function give a value betwon 0 - 0.9999...
    let runRandomBoxes = Math.random(); 

    if ( runRandomBoxes> .20 ) {
        randomBoxes.img = obstacleBoxesTwoIcon;
        randomBoxes.width = obstacleBoxesTwoWidth;
        obstacleBoxes.push( obstacleBoxes );
                // 80% chance of getting obstacleBoxesTwo.
    }

    else if ( runRandomBoxes> .10) {
        randomBoxes.img = obstacleBoxesOneIcon;
        randomBoxes.width = obstacleBoxesOneWidth;
        obstacleBoxes.push( obstacleBoxes );
                // 90% chance of getting obstacleBoxesOne.
    }

    else if ( runRandomBoxes > .90) {
        obstacleBoxes.push( obstacleBoxes );
                // 10% chance of getting NONE.
    }


}
