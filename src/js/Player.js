import HslColor from "./HslColor";
import {RunRightMouv} from "./movement-player/dyno/RunRightMouv";
import {RunLeftMouv} from "./movement-player/dyno/RunLeftMouv";
import {JumpMouv} from "./movement-player/dyno/JumpMouv";
import {IdleMouv} from "./movement-player/dyno/IdleMouv";
import {DynoConstant} from "./movement-player/dyno/DynoConstant";


export class Player {

    constructor(posX, posY, game) {
        this.ctx = game.ctx;
        this.position = {
            x: posX,
            y: posY
        }
        this.width = DynoConstant.dynoWidth;
        this.height = DynoConstant.dynoHeight;
        this.velocity = {
            x: 10,
            y: 0
        }

        this.gravity = 9;
        this.jumpDistance = 400;
        this.canvasWidth = game.width;
        this.canvasHeight = game.height;
        this.nextElementPositionUnderFeet = game.height;
        this.isGoingRigth = new RunRightMouv(false);
        this.isGoingLeft = new RunLeftMouv(false);
        this.isGoingUp = new JumpMouv(false);
        this.idle = new IdleMouv(true);
    }

    detectCurrentMouv() {
        if (this.isGoingRigth.isOnGoing) {
            return this.isGoingRigth;
        } else if (this.isGoingLeft.isOnGoing) {
            return this.isGoingLeft;
        } else if (this.isGoingUp.isOnGoing) {
            return this.isGoingUp;
        } else {
            return this.idle;
        }
    }

    draw() {
        let currentMouv = this.detectCurrentMouv();
        let currentImg = currentMouv.currentMovement();
        this.ctx.drawImage(currentImg, this.position.x, this.position.y - DynoConstant.dynoHeight - 30);
        this.ctx.fill()
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

    goUp() {
        if (!this.isGoingUp.isOnGoing) {
            this.position.y -= this.jumpDistance;
            this.isGoingUp.isOnGoing = true;
            console.log('isGoingUp')
        }
    }

    setNextElementPositionUnderFeet(posY) {
        this.nextElementPositionUnderFeet = posY;
    }

    update() {
        if (this.isGoingRigth.isOnGoing && (this.getRightPosition() + this.velocity.x < this.canvasWidth)) {
            this.position.x += this.velocity.x;
        }

        if (this.isGoingLeft.isOnGoing && (this.position.x - this.velocity.x > 0)) {
            this.position.x -= this.velocity.x;
        }

        if (this.getBottomPosition() + this.gravity < this.nextElementPositionUnderFeet) {
            this.position.y += this.gravity;
        } else {
            this.position.y = this.nextElementPositionUnderFeet;
            this.isGoingUp.isOnGoing = false;
        }

        let currentMouv = this.detectCurrentMouv();
        currentMouv.nextMovement();
    }
}
