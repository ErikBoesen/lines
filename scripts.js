const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'white';
currentPath = null;
paths = [];

let mouseDown = false;
let xOld, yOld, x, y;
canvas.onmousedown = function(e) {
    mouseDown =  true;
    currentPath = [];
}
canvas.onmouseup =   function(e) {
    mouseDown = false;
    paths.push(currentPath);
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

function draw() {
    shownPaths = paths;
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
setInterval(draw, 1);
