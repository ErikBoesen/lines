const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'white';

let mouseDown = false;
let xOld, yOld, x, y;
canvas.onmousedown = function(e) { mouseDown =  true; }
canvas.onmouseup =   function(e) { mouseDown = false; }
canvas.onmousemove = function(e) {
    if (mouseDown) {
        x = e.clientX - canvas.offsetLeft;
        y = e.clientY - canvas.offsetTop;
    } else {
        x = null;
        y = null;
    }
}

function draw() {
    if (x && y) {
        ctx.beginPath();
        if (!(xOld || yOld)) {
            xOld = x;
            yOld = y;
        }
        ctx.moveTo(xOld, yOld);
        ctx.lineTo(x, y);
        console.log(x, y);
        ctx.stroke();
    }
    xOld = x;
    yOld = y;
}
setInterval(draw, 1);
