import {DynoPlayer, states} from "./DynoPlayer"
import {keys} from "../../KeyPressedListener";
import {DynoConstant} from "./DynoConstant";
import {KeyPressedUtil} from "../../utils/KeyPressedUtil";

export class RunMoveRight extends DynoPlayer {
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 6, 7);
    }

    handleInput(activesKeys) {
        console.log('RunMoveRight' + activesKeys);
        let nextState = null;
        KeyPressedUtil.withNoKey(activesKeys, () => nextState = states.IDLE_RIGHT);
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.JUMPING_RIGHT, keys.KEY_UP)
        return nextState;
    }

    update(){
        super.update();
        this.player.objectMoving.velocity.x = DynoConstant.runningVelocityX;
    }

    enter() {
        super.enter();
        this.player.objectMoving.velocity.x = DynoConstant.runningVelocityX;
    }
}
