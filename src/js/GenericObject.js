export class GenericObject {
    constructor(posX, posY, width, height, game) {
        this.position = { x: posX, y: posY }
        this.velocity = { x: 0, y: 0 }
        this.game = game;
        this.width = width;
        this.height = height;
        this.ctx = game.ctx;
        console.log('this.ctx' + this.ctx)
    }

    getRightPosition() {
        return this.position.x + this.width;
    }

    getLeftPosition() {
        return this.position.x;
    }

    getTopPosition() {
        return this.position.y - this.height;
    }

    getBottomPosition() {
        return this.position.y;
    }

    onGround() {
        return this.getTopPosition() >= this.game.height - this.height;
    }

}
