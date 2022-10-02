import {DynoPlayer, states} from "./DynoPlayer"
import {keys} from "../../KeyPressedListener";
import {DynoConstant} from "./DynoConstant";
import {KeyPressedUtil} from "../../utils/KeyPressedUtil";

export class RunMoveLeft extends DynoPlayer {
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 7, 7);
    }
    
    handleInput(activesKeys) {
        console.log('RunMoveLeft' + activesKeys);
        let nextState = null;
        KeyPressedUtil.withNoKey(activesKeys, () => nextState = states.IDLE_LEFT);
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.JUMPING_LEFT, keys.KEY_UP)
        return nextState;
    }

    enter() {
        super.enter();
        this.player.objectMoving.velocity.x = - DynoConstant.runningVelocityX;
    }

}
