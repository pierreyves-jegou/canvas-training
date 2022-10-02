import {KeyPressedUtil} from "../../utils/KeyPressedUtil";
import {keys} from "../../KeyPressedListener";
import {DynoConstant} from "./DynoConstant";
import {DynoPlayer, states} from "./DynoPlayer";

export class JumpMoveLeft extends DynoPlayer{
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 5, 11);
        this.framesJumping = 0;
    }

    handleInput(activesKeys){
        let nextState = null;
        KeyPressedUtil.withExactlyKeys(activesKeys, () => {
                console.log('while jumping : ' + this.player.objectMoving.velocity.x)
                if(this.player.objectMoving.velocity.x  >= 0){
                    this.player.objectMoving.velocity.x = - DynoConstant.jumpWithoutVelocityMaxVelocity;
                }
            },
            keys.KEY_LEFT);
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.JUMPING_RIGHT, keys.KEY_RIGHT)
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.JUMPING_RIGHT, keys.KEY_RIGHT, keys.KEY_UP)
        return nextState;
    }

    update(){
        super.update();
        if(this.framesJumping > 3){
            if(this.player.onGround()){
                this.player.setState(states.IDLE_LEFT);
            }
        }
        this.framesJumping++;
    }

    enter() {
        super.enter();
        this.framesJumping = 0;
        if(this.player.onGround()){
            this.player.velocity.y = -35;
        }
    }
}

