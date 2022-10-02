import {DynoPlayer, states} from "./DynoPlayer"
import {keys} from "../../KeyPressedListener";
import {KeyPressedUtil} from "../../utils/KeyPressedUtil";

export class SitDownLeft extends DynoPlayer{
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 1, 4);
    }

    handleInput(activesKeys) {
        console.log('SitDownLeft' + activesKeys);
        let nextState = null;
        KeyPressedUtil.withNoKey(activesKeys, () => nextState = states.IDLE_LEFT);
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.SITDOWN_IDLE_LEFT, keys.KEY_DOWN)
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.SITDOWN_RIGHT, keys.KEY_DOWN, keys.KEY_RIGHT)
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.RUNNING_RIGHT, keys.KEY_RIGHT)
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.RUNNING_LEFT, keys.KEY_LEFT)
        return nextState;
    }

    enter() {
        super.enter();
        this.player.objectMoving.velocity.x = 3;
    }
}

