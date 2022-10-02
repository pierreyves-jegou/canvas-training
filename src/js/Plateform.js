import {GenericObject} from "./GenericObject";
import {DynoConstant} from "./movement-player/dyno/DynoConstant";

export class Plateform extends GenericObject {
    constructor(posX, posY, game) {
        super(posX, posY, DynoConstant.plateformWidth, DynoConstant.plateformHeigth, game)
        this.width = 500;
        this.height = 50;
    }

    draw() {
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.position.x, this.position.y, this.width, this.height);
        this.game.ctx.fillStyle = 'red';
        this.game.ctx.fill();
    }

    update() {
        this.velocity.x = this.game.velocity.x;
        this.position.x -= this.velocity.x;
    }


}
