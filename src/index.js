const canvas = document.getElementById('my-canva');
const ctx = canvas.getContext("2d");

let posX = null
let posY = null

function drawCircle(posX, posY) {
    ctx.beginPath();
    ctx.arc(posX, posY, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = getRndColor();
    ctx.fill();

    function getRndColor() {
        var r = 255*Math.random()|0,
            g = 255*Math.random()|0,
            b = 255*Math.random()|0;
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

}

canvas.addEventListener('mousemove', (event) => {
    console.log(event)
    posX = event.x;
    posY = event.y;
    drawCircle(posX, posY)
});



