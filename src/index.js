const canvas = document.getElementById('my-canva');
const ctx = canvas.getContext("2d");

function drawCircle(posX, posY) {
    ctx.beginPath();
    ctx.arc(posX, posY, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
}

drawCircle(50, 50)


