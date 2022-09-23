const canvas = document.getElementById('my-canva');
const ctx = canvas.getContext("2d");

function drawCircle(posX, posY) {
    ctx.beginPath();
    ctx.arc(posX, posY, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
}

canvas.addEventListener('mousedown', (event) => {
    console.log(event)
    let posX = event.x;
    let posY = event.y;
    drawCircle(posX, posY)
});



