import {RunMoveRight} from "./movement-player/dyno/RunMoveRight";
import {RunMoveLeft} from "./movement-player/dyno/RunMoveLeft";
import {JumpMoveRight} from "./movement-player/dyno/JumpMoveRight";
import {IdleMoveRight} from "./movement-player/dyno/IdleMoveRight";
import {DynoConstant} from "./movement-player/dyno/DynoConstant";
import {states} from "./movement-player/dyno/DynoPlayer";
import {IdleMoveLeft} from "./movement-player/dyno/IdleMoveLeft";

import sprint_dyno from "../image/dyno_sprit/sprint_dyno.png"
import {ImageSource} from "./utils/ImageSource";
import {SitDownRight} from "./movement-player/dyno/SitDownRight";
import {JumpMoveLeft} from "./movement-player/dyno/JumpMoveLeft";
import {SitDownIdleRight} from "./movement-player/dyno/SitDownIdleRight";
import {SitDownIdleLeft} from "./movement-player/dyno/SitDownIdleLeft";
import {SitDownLeft} from "./movement-player/dyno/SitDownLeft";
import {GenericObject} from "./GenericObject";
import {DeadMove} from "./movement-player/dyno/DeadMove";

export class Player extends GenericObject{

    static imgSrc = ImageSource.createImage(sprint_dyno);

    constructor(posX, posY, game) {
        super(posX, posY, DynoConstant.dynoWidth, DynoConstant.dynoHeight, game)
        this.gravity = 1;
        //this.playerMovingXBoundary = {minX : 100, maxX: 1000}
        this.playerMovingXBoundary = {minX : 0, maxX: game.width}
        this.activesKeys = [];
        this.handleInput();

        this.objectMoving = this;

        this.states = [new IdleMoveRight(this, true), new IdleMoveLeft(this, false),
            new RunMoveRight(this, false), new RunMoveLeft(this, false),
            new JumpMoveRight(this, false), new JumpMoveLeft(this, false),
            new SitDownRight(this, false), new SitDownLeft(this, false),
            new SitDownIdleRight(this, false), new SitDownIdleLeft(this, false),
            new DeadMove(this, false)
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


        if(
            (this.objectMoving.velocity.x > 0 && this.getRightPosition() >= this.game.scrollingInterval.right) ||
            (this.objectMoving.velocity.x < 0 && this.getLeftPosition() <= this.game.scrollingInterval.left)
        ){
            let currentVelocityX = this.objectMoving.velocity.x;
            this.objectMoving = this.game;
            this.objectMoving.velocity.x = currentVelocityX;
            this.velocity.x = 0;
        }else{
            let currentVelocityX = this.objectMoving.velocity.x;
            this.objectMoving = this;
            this.objectMoving.velocity.x = currentVelocityX;
            this.game.velocity.x = 0;
        }



        //
        // if(this.objectMoving.velocity.x != 0 &&
        //     (this.getRightPosition() >= this.game.scrollingInterval.right ||
        //     this.getLeftPosition() <= this.game.scrollingInterval.left
        //     )){
        //     let currentVelocityX = this.objectMoving.velocity.x;
        //     this.objectMoving = this.game;
        //     this.objectMoving.velocity.x = currentVelocityX;
        //     this.velocity.x = 0;
        // }else{
        //     let currentVelocityX = this.objectMoving.velocity.x;
        //     this.objectMoving = this;
        //     this.objectMoving.velocity.x = currentVelocityX;
        //     this.game.velocity.x = 0;
        // }


        // if(this.objectMoving.velocity.x > 0 && this.getRightPosition() >= this.game.scrollingInterval.right){
        //     let currentVelocityX = this.objectMoving.velocity.x;
        //     this.objectMoving = this.game;
        //     this.objectMoving.velocity.x = currentVelocityX;
        //     this.velocity.x = 0;
        // }else if(this.objectMoving.velocity.x < 0 && this.getRightPosition() <= this.game.scrollingInterval.right
        // && this.getLeftPosition() > this.game.scrollingInterval.left){
        //     let currentVelocityX = this.objectMoving.velocity.x;
        //     this.objectMoving = this;
        //     this.objectMoving.velocity.x = currentVelocityX;
        //     this.game.velocity.x = 0
        // }else if(this.objectMoving.velocity.x < 0 && this.getLeftPosition() <= this.game.scrollingInterval.left){
        //     let currentVelocityX = this.objectMoving.velocity.x;
        //     this.objectMoving = this.game;
        //     this.objectMoving.velocity.x = currentVelocityX;
        //     this.velocity.x = 0;
        // }



        this.position.y += this.velocity.y;
        if (!this.onGround()) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
        }
        this.position.x += this.velocity.x;
    }

    setNextElementPositionUnderFeet(posY) {
        this.nextElementPositionUnderFeet = posY;
    }

    setState(state) {
        if (this.currentState != null) {
            this.currentState.isOnGoing = false;
        }
        this.currentState = this.states[state];
        this.currentState.isOnGoing = true;
        this.currentState.enter();
        this.currentState.handleInput(this.activesKeys);
    }

    handleInput(){
        window.addEventListener('KeyPressed', (event) => {
                this.activesKeys = event.detail;
                if(this.currentState != null){
                    let nextState = this.currentState.handleInput(this.activesKeys);
                    if(nextState != null){
                        this.setState(nextState)
                    }
                }
            }
        )
    }
}
