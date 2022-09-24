
const canvas = document.getElementById('my-canva');
const ctx = canvas.getContext("2d");
const button = document.getElementById('clearButtonId');
const maxColorButton = document.getElementById('maxColorOn');
const pencilSizeInput = document.getElementById('pencilSizeInput');


let posX = null
let posY = null
let maxColor = false;
let isMouseDown = false;
let pencilSize = 50;

button.addEventListener('click', (event) => {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
});

pencilSizeInput.addEventListener('change', (event) => {
    pencilSize = event.target.value;
})

maxColorButton.addEventListener('click', (event) => {
    if(maxColorButton.checked){
        maxColor = true;
    }else {
        maxColor = false;
    }
})

function drawCircle(posX, posY) {
    ctx.beginPath();
    ctx.arc(posX, posY, pencilSize, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = getRndColor();
    ctx.fill();

    function getRndColor() {
        var r = 100*Math.random()|0,
            g = 100*Math.random()|0,
            b = 100*Math.random()|0;
        if(maxColor){
            return 'rgb(' + r + ',' + g + ',' + b + ')';
        }else{
            return 'black'
        }
    }

}

canvas.addEventListener('mousedown', (event) => {
    isMouseDown = true;
});

canvas.addEventListener('mouseup', (event) => {
    isMouseDown = false;
});

canvas.addEventListener('mousemove', (event) => {
    posX = event.x;
    posY = event.y;
});

function animate(){
    if(isMouseDown){
        drawCircle(posX, posY);
    }
    requestAnimationFrame(animate)
}

animate()
