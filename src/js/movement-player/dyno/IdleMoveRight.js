import {keys} from "../../KeyPressedListener";
import {DynoPlayer} from "./DynoPlayer";
import {states} from "./DynoPlayer"
import {KeyPressedUtil} from "../../utils/KeyPressedUtil";

export class IdleMoveRight extends DynoPlayer {
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 2,9);
    }

    handleInput(activesKeys) {
        console.log('IdleMouvRight' + activesKeys);
        let nextState = null;
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.RUNNING_RIGHT, keys.KEY_RIGHT);
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.RUNNING_LEFT, keys.KEY_LEFT);
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.JUMPING_RIGHT, keys.KEY_UP);
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.SITDOWN_IDLE_RIGHT, keys.KEY_DOWN);
        return nextState;
    }

    enter() {
        super.enter();
        this.player.objectMoving.velocity.x = 0;
    }

}
