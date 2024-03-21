
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');

const canvasContainer = document.querySelector('.canvas-container');

canvas.width = canvasContainer.offsetWidth;
canvas.height = canvasContainer.offsetHeight;

ctx.strokeStyle = '#black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

console.log(ctx);

let x=0;
let y=0;
let isDrawing = false;


// function getMousePos(canvas, e) {
//     const rect = canvas.getBoundingClientRect();
//     return {
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top
//     };
// }

function getTransformedPoint(x, y) {
    const originalPoint = new DOMPoint(x, y);
    return ctx.getTransform().invertSelf().transformPoint(originalPoint);
}


function drawLine(e){
    if (!isDrawing) return;

    // const pos = getMousePos(canvas, e);
    const pos = getTransformedPoint(e.offsetX ,e.offsetY);

    ctx.beginPath();
    ctx.moveTo(x,y);
    // ctx.lineTo(e.offsetX ,e.offsetY);
    ctx.lineTo(pos.x ,pos.y);
    ctx.stroke();
    console.log(pos.e);
    // console.log(`x:${x}, y:${y}`);

    x = pos.x;
    y = pos.y;
}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    const pos = getTransformedPoint(e.offsetX ,e.offsetY);
    // const pos = getMousePos(canvas, e);
    // x = e.offSetX;
    // y = e.offsetY;
    x = pos.x;
    y = pos.y;
    drawLine(e);
});


canvas.addEventListener("mouseup", () => isDrawing = false);


canvas.addEventListener("mousemove", (e) =>{
    drawLine(e);
});


// for touch devices

canvas.addEventListener("touchstart", (e) => {
    isDrawing = true;
    const pos = getTransformedPoint(e.offsetX ,e.offsetY);
    x = pos.x;
    y = pos.y;
    drawLine(e);
}
);

canvas.addEventListener("touchend", () => isDrawing = false);

canvas.addEventListener("touchmove", (e) =>{
    drawLine(e);
});