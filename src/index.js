import HslColor from "./js/HslColor";

const canvas = document.getElementById('my-canva');
const ctx = canvas.getContext("2d");
const button = document.getElementById('clearButtonId');

const mousePosition = {
    posX : null,
    posY : null
}

button.addEventListener('click', (event) => {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
});

let particules = [];
let hsl_h = 0;

class Particule{
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = new HslColor(Math.random() * 359 + 1, 100, 50);
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.size, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = this.color.toColor()
        ctx.fill();
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
        const particle = new Particule(mousePosition.posX, mousePosition.posY);
        if(i > 0){
            const hslColor = particules[i-1].color;
            hslColor.increaseH(3);
            particle.color = new HslColor(hslColor.h, hslColor.s, hslColor.l);
        }
        particules.push(particle);
    }
}

function animate(){
    hsl_h++;
    for(let i=0; i < particules.length; i++){
        const particle = particules[i];
        if(particle.size < 1){
            particules.splice(i, 1);
        }
        particle.draw();
        particle.update();
    }
    requestAnimationFrame(animate)
}

animate()
