import {PlayerMovementMultiImage, states} from "../PlayerMovment";
import {keys} from "../../KeyPressedListener";
import {KeyPressedUtil} from "../../utils/KeyPressedUtil";

export class SitDownIdleRight extends PlayerMovementMultiImage{
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 0, 0);
        this.handleInput();
    }

    handleInput() {
        window.addEventListener('KeyPressed', (event) => {
                if (this.isOnGoing) {
                    let keysPressed = event.detail;
                    console.log('SitDownIdleRight' + keysPressed);
                    KeyPressedUtil.withNoKey(keysPressed, () => this.player.setState(states.IDLE_RIGHT));
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.RUNNING_RIGHT), keys.KEY_RIGHT);
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.SITDOWN_RIGHT), keys.KEY_RIGHT, keys.KEY_DOWN);
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.IDLE_LEFT), keys.KEY_LEFT);
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.SITDOWN_IDLE_LEFT), keys.KEY_LEFT, keys.KEY_DOWN);
                }
            }
        )
    }

    enter() {
        super.enter();
        this.player.velocity.x = 0;
    }
}

