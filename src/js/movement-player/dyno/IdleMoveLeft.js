import {states} from "./DynoPlayer";

import {keys} from "../../KeyPressedListener";
import {KeyPressedUtil} from "../../utils/KeyPressedUtil";
import {DynoPlayer} from "./DynoPlayer";

export class IdleMoveLeft extends DynoPlayer {
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 3, 9);
    }

    handleInput(activesKeys) {
        console.log('IdleMouvLeft' + activesKeys);
        let nextState = null;
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.RUNNING_RIGHT, keys.KEY_RIGHT)
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.RUNNING_LEFT, keys.KEY_LEFT)
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.SITDOWN_LEFT, keys.KEY_DOWN)
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.JUMPING_LEFT, keys.KEY_UP)
        return nextState;
    }

    enter() {
        super.enter();
        this.player.objectMoving.velocity.x = 0;
    }

}
