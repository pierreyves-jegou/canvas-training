const canvas = document.getElementById('my-canva');
canvas.width = window.innerWidth-10;
canvas.height = window.innerHeight-10;
const ctx = canvas.getContext("2d");

class Game{
    constructor(width, height, ctx) {
        this.width = width;
        this.height = height;
        this.ctx = ctx;
    }
}

export const game = new Game(canvas.width, canvas.height, ctx);
