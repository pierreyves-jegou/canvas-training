import {ImageSource} from "./utils/ImageSource";
import cactusImgSrc from "../image/cactus_240x399.png"
import {GenericObject} from "./GenericObject";
import {DynoConstant} from "./movement-player/dyno/DynoConstant";

export class Cactus extends GenericObject{

    static cactusImg = ImageSource.createImage(cactusImgSrc)

    constructor(posX, posY, game) {
        super(posX, posY, DynoConstant.cactusWidth, DynoConstant.cactusHeight, game);
        this.velocity = {
            x : 0,
            y : 0
        }
    }

    draw() {
        this.game.ctx.drawImage(Cactus.cactusImg, this.position.x , this.position.y - DynoConstant.cactusHeight, DynoConstant.cactusWidth, DynoConstant.cactusHeight);
    }



    update() {
        this.velocity.x = this.game.velocity.x;
        this.position.x -= this.velocity.x;
    }

}
