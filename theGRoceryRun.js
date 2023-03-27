
                // canvas variables.
let gameWindow;
let gameWindowWidth = 2000;
let gameWindowHeight = 1300;
let windoContent;

                // player variables.
let playerWidth;
let playerHeight;
let playerX;
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

let obstacleBoxesOneWidth = 100;
let obstacleBoxesTwoWidth = 150;

let obstacleBoxesHeight = 300;
let obstacleBoxesX = 700;
let obstacleBoxesY = gameWindowHeight - obstacleBoxesHeight;

let obstacleBoxesOneIcon;
let obstacleBoxesTwoIcon;




                // this is my gameWindow (canvas)  - .onload function.
window.onload = function() {
    gameWindow = document.getElementById("gameWindow");
    gameWindow.width = gameWindowWidth;
    gameWindow.height = gameWindowHeight;

    console.log(gameWindow);


    windowContent = gameWindow.getContext("2d");


               // this is my playerCharacter - .onload function.
    playerCharacter = new Image();
    player.src = "";
    playerCharacter.onload = function(){

        windowContent.drawImage(playerCharacter,player.x, player.y, player.width, player.height);
    }


                // this my obstacleBoxes - .onload function.
    obstacleBoxOneIcon = new Image();
    obstacleBoxOneIcon.src = "";

    obstacleBoxTwoIcon = new Image();
    obstacleBoxTwoIcon.src = "";



    requestAnimationFrame( loadCharacters );
    setInterval( runObstacleBoxes, 1000);

}





function loadCharacters() {
    requestAnimationFrame( loadCharacters );

                // player .draw funtion
    windowContent.drawImage(playerCharacter, player.x, player.y, player.width, player.height);

               // obstaleBoxes .draw function
    for ( let i = 0; i < obstacleBoxes.length; i++) {

        let obstacleRandomBoxes = obstacleBoxes[ i ];
        windowContent.drawImage(obstacleBoxes.x, obstacleBoxes.y, obstacleBoxes.width, obstacleBoxes.height);

    }



}

function runObstacleBoxes() {

    let obstacleRandomBoxes ={
        img : null,
        x: obstacleBoxesX,
        y: obstacleBoxesY,
        width: null,
        height: obstacleBoxesHeight

    }
    
    let runObstaclesBoxesRandom = Math.random();

    if ( runObstaclesBoxesRandom > .20 ) {
        obstacleRandomBoxes.img = obstacleBoxesTwoIcon;
        obstacleRandomBoxes.width = obstacleBoxesTwoWidth;
        obstacleBoxes.push( obstacleBoxes );
    }

    else if ( runObstaclesBoxesRandom > .10) {
        obstacleRandomBoxes.img = obstacleBoxesOneIcon;
        obstacleRandomBoxes.width = obstacleBoxesOneWidth;
        obstacleBoxes.push( obstacleBoxes );
    }

    else if ( runObstaclesBoxesRandom > .90) {
        obstacleBoxes.push( obstacleBoxes );
    }


}