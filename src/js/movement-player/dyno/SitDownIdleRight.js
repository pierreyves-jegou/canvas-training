import {DynoPlayer, states} from "./DynoPlayer"
import {keys} from "../../KeyPressedListener";
import {KeyPressedUtil} from "../../utils/KeyPressedUtil";

export class SitDownIdleRight extends DynoPlayer{
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 0, 0);
    }

    handleInput(activesKeys) {
        console.log('SitDownIdleRight' + activesKeys);
        let nextState = null;
        KeyPressedUtil.withNoKey(activesKeys, () => nextState = states.IDLE_RIGHT);
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.RUNNING_RIGHT, keys.KEY_RIGHT);
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.SITDOWN_RIGHT, keys.KEY_RIGHT, keys.KEY_DOWN);
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.IDLE_LEFT, keys.KEY_LEFT);
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.SITDOWN_IDLE_LEFT, keys.KEY_LEFT, keys.KEY_DOWN);
        return nextState;
    }

    enter() {
        super.enter();
        this.player.objectMoving.velocity.x = 0;
    }
}

