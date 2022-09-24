
const canvas = document.getElementById('my-canva');
const ctx = canvas.getContext("2d");
const button = document.getElementById('clearButtonId');

const mousePosition = {
    posX : null,
    posY : null
}

const currentColor = {
    red : 0,
    green : 0,
    bleu : 0
}

button.addEventListener('click', (event) => {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
});

let particules = [];
let hue = 0;

class Particule{
    constructor(posX, posY, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ',100%,50%)';
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.size, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = this.color
        ctx.fill();

        function getRndColor() {
            var r = 100*Math.random()|0,
                g = 100*Math.random()|0,
                b = 255*Math.random()|0;
            return 'rgb(' + r + ',' + g + ',' + b + ')';
        }


    }

    update(){
        this.posX += this.speedX;
        this.posY += this.speedY;
        if(this.size > 0.2) this.size -= 0.1;
    }
}

canvas.addEventListener('click', (event) => {
    mousePosition.posX = event.x;
    mousePosition.posY = event.y;
    initParticules();
});


function initParticules(){
    for(let i = 0; i < 100; i++){
        particules.push(new Particule(mousePosition.posX, mousePosition.posY, ctx));
    }
}

function animate(){
    hue++;
    for(let particule of particules){
        particule.draw();
        particule.update();
    }
    requestAnimationFrame(animate)
}

animate()
