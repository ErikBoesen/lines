const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const instructions = document.getElementById('instructions');

ctx.strokeStyle = 'white';
ctx.lineWidth = 3;
currentPath = null;
paths = [];

let mouseDown = false;
let xOld, yOld, x, y;
canvas.onmousedown = function(e) {
    console.log('Mouse down!');
    if (instructions) {
        instructions.parentNode.removeChild(instructions);
    }
    mouseDown = true;
    currentPath = [];
}
canvas.onmouseup = function(e) {
    console.log('Mouse up!');
    mouseDown = false;
    if (currentPath.length > 1) {
        paths.push(currentPath);
    }
    currentPath = null;
}
canvas.onmousemove = function(e) {
    if (mouseDown) {
        currentPath.push({
            x: e.clientX - canvas.offsetLeft,
            y: e.clientY - canvas.offsetTop
        });
    }
}

function move() {
    for (path of paths) {
        offsetX = path[1].x - path[0].x;
        offsetY = path[1].y - path[0].y;
        point = path.shift();
        point.x = path[path.length - 1].x + offsetX;
        point.y = path[path.length - 1].y + offsetY;
        path.push(point);
    }
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shownPaths = paths.slice();
    if (currentPath) {
        shownPaths.push(currentPath);
    }
    for (path of shownPaths) {
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (point of path) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
    }
}
setInterval(function() {
    move();
    draw();
}, 10);
