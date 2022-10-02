export class Plateform {
    constructor(posX, posY, ctx) {
        this.position = { x: posX, y: posY }
        this.ctx = ctx;
        this.width = 500;
        this.height = 50;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.position.x, this.position.y, this.width, this.height);
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
    }



    update() {

    }


}
