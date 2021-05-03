
const canvas = document.querySelector("#draw");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#BADA55';
ctx.lineWidth = 10;

var isDrawing = false;
var lastX = 0;
var lastY = 0;
var direction = true;
var isErase = false;



canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {

    isDrawing = true;

    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
var hue = 0;


function draw(e) {
    if (!isDrawing)
        return;  //This stops the function from running when mouse is not clicked

    if (isErase) {
        ctx.strokeStyle = "white";
        ctx.lineWidth = 80;
        ctx.beginPath();

        ctx.moveTo(lastX, lastY);

        ctx.lineTo(e.offsetX, e.offsetY);

        ctx.stroke();

        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    else {
        ctx.strokeStyle = `hsl(${hue} , 100% , 50%)`;
        



        console.log(isErase);
        ctx.beginPath();

        ctx.moveTo(lastX, lastY);

        ctx.lineTo(e.offsetX, e.offsetY);

        ctx.stroke();

        [lastX, lastY] = [e.offsetX, e.offsetY];

        hue++;
        if (ctx.lineWidth > 80 || ctx.lineWidth <= 8) {
            direction = !direction;
        }

        if (direction) {
            ctx.lineWidth++;
        }
        else {
            ctx.lineWidth--;
        }
    }
    // if (ctx.lineWidth > 30 || ctx.lineWidth <= 1) {
    //     direction = !direction;
    // }

    // if (direction) {
    //     ctx.lineWidth++;
    // }
    // else {
    //     ctx.lineWidth--;
    // }









}

document.querySelector("#erase").addEventListener("click", activateEraser);

function activateEraser() {
    isErase = true;


}

document.querySelector("#draw-button").addEventListener("click", dectivateEraser);

function dectivateEraser() {
    isErase = false;


}