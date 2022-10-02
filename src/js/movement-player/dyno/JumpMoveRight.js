import {KeyPressedUtil} from "../../utils/KeyPressedUtil";
import {keys} from "../../KeyPressedListener";
import {DynoConstant} from "./DynoConstant";
import {DynoPlayer} from "./DynoPlayer";
import {states} from "./DynoPlayer"

export class JumpMoveRight extends DynoPlayer {
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 4, 11);
        this.framesJumping = 0;
    }

    handleInput(activesKeys) {
        console.log('JumpMoveRight' + activesKeys);
        let nextState = null;
        KeyPressedUtil.withExactlyKeys(activesKeys, () => {
                console.log('while jumping : ' + this.player.objectMoving.velocity.x)
                if (this.player.objectMoving.velocity.x <= 0) {
                    this.player.objectMoving.velocity.x = DynoConstant.jumpWithoutVelocityMaxVelocity;
                }
            },
            keys.KEY_RIGHT);
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.JUMPING_LEFT, keys.KEY_LEFT)
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.JUMPING_RIGHT, keys.KEY_LEFT, keys.KEY_UP)
        return nextState;
    }

    update() {
        super.update();
        if (this.framesJumping > 3) {
            if (this.player.onGround()) {
                this.player.setState(states.IDLE_RIGHT);
            }
        }
        this.framesJumping++;
    }

    enter() {
        super.enter();
        this.framesJumping = 0;
        if (this.player.onGround()) {
            this.player.velocity.y = -35;
        }
    }
}

