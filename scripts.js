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

ctx.moveTo(0, 0);
function draw() {
    ctx.lineTo(x, y);
    console.log(x);
}
setInterval(function() {
    draw();
}, 100);
