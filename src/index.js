const canvas = document.getElementById('my-canva');
const ctx = canvas.getContext("2d");

let posX = null
let posY = null

function drawCircle(posX, posY) {
    ctx.beginPath();
    ctx.arc(posX, posY, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
}

canvas.addEventListener('mousemove', (event) => {
    console.log(event)
    posX = event.x;
    posY = event.y;
    drawCircle(posX, posY)
});



