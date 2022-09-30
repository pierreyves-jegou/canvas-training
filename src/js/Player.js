import {RunMoveRight} from "./movement-player/dyno/RunMoveRight";
import {RunMoveLeft} from "./movement-player/dyno/RunMoveLeft";
import {JumpMoveRight} from "./movement-player/dyno/JumpMoveRight";
import {IdleMoveRight} from "./movement-player/dyno/IdleMoveRight";
import {DynoConstant} from "./movement-player/dyno/DynoConstant";
import {states} from "./movement-player/PlayerMovment";
import {IdleMoveLeft} from "./movement-player/dyno/IdleMoveLeft";

import sprint_dyno from "../image/dyno_sprit/sprint_dyno.png"
import {ImageSource} from "./utils/ImageSource";
import {SitDownRight} from "./movement-player/dyno/SitDownRight";
import {JumpMoveLeft} from "./movement-player/dyno/JumpMoveLeft";
import {SitDownIdleRight} from "./movement-player/dyno/SitDownIdleRight";
import {SitDownIdleLeft} from "./movement-player/dyno/SitDownIdleLeft";
import {SitDownLeft} from "./movement-player/dyno/SitDownLeft";

const debug = true;

export class Player {

    static imgSrc = ImageSource.createImage(sprint_dyno);

    constructor(posX, posY, game) {
        this.ctx = game.ctx;
        this.position = { x: posX, y: posY }
        this.width = DynoConstant.dynoWidth;
        this.height = DynoConstant.dynoHeight;
        this.velocity = { x: 0, y: 0 }
        this.game = game;
        this.gravity = 1;
        //this.playerMovingXBoundary = {minX : 100, maxX: 1000}
        this.playerMovingXBoundary = {minX : 0, maxX: game.width}

        this.states = [new IdleMoveRight(this, true), new IdleMoveLeft(this, false),
            new RunMoveRight(this, false), new RunMoveLeft(this, false),
            new JumpMoveRight(this, false), new JumpMoveLeft(this, false),
            new SitDownRight(this, false), new SitDownLeft(this, false),
            new SitDownIdleRight(this, false), new SitDownIdleLeft(this, false)
        ];
        this.setState(states.IDLE_RIGHT);
    }

    draw() {
        this.ctx.drawImage(
            Player.imgSrc,
            this.currentState.sprite.currentSprite * DynoConstant.dynoWidth,
            this.currentState.sprite.spriteHeight * DynoConstant.dynoHeight,
            DynoConstant.dynoWidth,
            DynoConstant.dynoHeight,
            this.position.x,
            this.position.y - DynoConstant.dynoHeight,
            DynoConstant.dynoWidth,
            DynoConstant.dynoHeight
        )

        if(debug){
            this.ctx.beginPath();
            this.ctx.lineWidth = "1";
            this.ctx.strokeStyle = "red";
            this.ctx.rect(this.position.x, this.position.y - this.height, this.width, this.height);
            this.ctx.stroke();
        }
    }

    update() {
        this.currentState.update();
        if((this.velocity.x > 0 && this.position.x < this.playerMovingXBoundary.maxX)
            || this.velocity.x < 0 && this.position.x > this.playerMovingXBoundary.minX){
            this.position.x += this.velocity.x;
        }else{
            this.velocity.x = 0;
        }

        this.position.y += this.velocity.y;
        if (!this.onGround()) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
        }

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

    setNextElementPositionUnderFeet(posY) {
        this.nextElementPositionUnderFeet = posY;
    }

    onGround() {
        return this.getTopPosition() >= this.game.height - this.height;
    }

    setState(state) {
        if (this.currentState != null) {
            this.currentState.isOnGoing = false;
        }
        this.currentState = this.states[state];
        this.currentState.isOnGoing = true;
        this.currentState.enter()
    }


}
