const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'white';

let mouseDown = false;
canvas.onmousedown = function(e) { mouseDown =  true; }
canvas.onmouseup =   function(e) { mouseDown = false; }

function draw() {
    console.log(mouseDown);
}
setInterval(draw, 100);
