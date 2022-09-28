export class Plateform {
    constructor(posX, posY, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.width = 500;
        this.height = 50;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.posY, this.posY, this.width, this.height);
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
    }



    update() {

    }


}
