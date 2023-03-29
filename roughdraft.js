const canvas = document.getElementById("gameWindow");
const content = canvas.getContext("2d");


const CANVAS_WIDTH = 750;
const CANVAS_HEIGHT = 250;

let canvasRatio = null;

// this function will make the canvas scale ratio dynamic based of browser
function setScreen(){
    canvasRatio = getCanvasRatio();
    canvas.width = CANVAS_WIDTH * canvasRatio;
    canvas.height = CANVAS_HEIGHT * canvasRatio;
    
}
setScreen();

window.addEventListener("resize", setScreen);

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


