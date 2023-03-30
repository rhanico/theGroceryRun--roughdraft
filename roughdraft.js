//import Player from "./playerC.js";
class Player {
    constructor (content, height, minJumpHeight, maxJumpheight, canvasRatio){
        this.content = content;
        this.canvas = content.canvas;
        this.width = width;
        this.height = height;
        this.minJumpHeight = minJumpHeight;
        this.maxJumpheight = maxJumpheight;
        this.canvasRatio = canvasRatio;
    }
}
// this is calling our canvas tag to our js
const canvas = document.getElementById("gameWindow");
const content = canvas.getContext("2d");


    //this is our canvas constant variable dimention measurements.
const CANVAS_WIDTH = 750;
const CANVAS_HEIGHT = 250;

            //this is our "player" properties/variables
const PLAYER_WIDTH = 88 /1.5;   // by dividing the og size, it will creat proportional ratio based of the canvas ratio.
const PLAYER_HEIGHT = 94/ 1.5;

            // this is our jump ratio when character pass obstacle
const MAX_JUMP_HEIGHT = CANVAS_HEIGHT; //EQUALL TO THE MAX HEIGH OF OUR CANVAS HEIGHT
const MIN_JUMP_HEIGHT = 150;

//game objest
let player = null;

let canvasRatio = null;
let previousTime = null;

            //this is function if for creating animation/sprites for our objects.
function createSprites(){
    const playerWidthInGame = PLAYER_WIDTH * canvasRatio;
    const playerHeightInGame = PLAYER_HEIGHT * canvasRatio;
    const minJumpHeightInGame = MIN_JUMP_HEIGHT * canvasRatio;
    const maxJumpHeightInGame = MAX_JUMP_HEIGHT * canvasRatio;

    player = new Player(
        content,
        playerWidthInGame,
        playerHeightInGame,
        minJumpHeightInGame,
        maxJumpHeightInGame,
        canvasRatio
    )

}


// this function will make the canvas scale ratio dynamic based of browser
function setScreen(){
    canvasRatio = getCanvasRatio();
    canvas.width = CANVAS_WIDTH * canvasRatio;
    canvas.height = CANVAS_HEIGHT * canvasRatio;

    createSprites();  // this will creating our sprites/animation for our game.  
}
setScreen();


                                    //this part of code will add a delay for the canvas to load when changed screen orientation from different browser/devices.
window.addEventListener("resize", () =>setTimeout( setScreen, 500 ));

if (screen.orientation) {
    screen.orientation.addEventListener ("change", setScreen);
}

console.log(canvasRatio);

function getCanvasRatio() {
    const screenHeight = Math.min (
        window.innerHeight,
        document.documentElement.clientHeight
    );

    const screenWidth = Math.min (
        window.innerWidth,
        document.documentElement.clientWidth
    );

    if( CANVAS_WIDTH / CANVAS_HEIGHT < CANVAS_WIDTH / CANVAS_HEIGHT) {
        return screen / canvasWidth
    }
    else {
        return screenHeight / CANVAS_HEIGHT;
    }
}

                    //this part will refresh and clear the content of thescreen.
function clearScreen(){
    content.fillStyle = "red";
    content.fillRect( 0, 0, canvas.width, canvas.height);

}

                        //this part of code will set a function to "loop" our game.
function gameLoop(currentTime){

        if( previousTime === null){                 //
            previousTime = currentTime;
            requestAnimationFrame ( gameLoop );
            return;
        }
    const frameTimeDelta = currentTime - previousTime;
    previousTime = currentTime;

    clearScreen();
    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);

