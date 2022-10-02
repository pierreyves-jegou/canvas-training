import {DynoPlayer, states} from "./DynoPlayer"
import {keys} from "../../KeyPressedListener";
import {KeyPressedUtil} from "../../utils/KeyPressedUtil";

export class SitDownIdleLeft extends DynoPlayer{
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 1, 0);
    }

    handleInput(activesKeys) {
        console.log('SitDownIdleLeft' + activesKeys);
        let nextState = null;
        KeyPressedUtil.withNoKey(activesKeys, () => nextState = states.IDLE_LEFT);
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.SITDOWN_LEFT, keys.KEY_DOWN, keys.KEY_LEFT)
        KeyPressedUtil.withExactlyKeys(activesKeys, () => nextState = states.SITDOWN_RIGHT, keys.KEY_DOWN, keys.KEY_RIGHT)
        return nextState;
    }

    enter() {
        super.enter();
        this.player.objectMoving.velocity.x = 0;
    }
}

