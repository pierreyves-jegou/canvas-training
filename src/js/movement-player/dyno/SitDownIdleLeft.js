import {PlayerMovementMultiImage, states} from "../PlayerMovment";
import {keys} from "../../KeyPressedListener";
import {KeyPressedUtil} from "../../utils/KeyPressedUtil";

export class SitDownIdleLeft extends PlayerMovementMultiImage{
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 1, 0);
        this.handleInput();
    }

    handleInput() {
        window.addEventListener('KeyPressed', (event) => {
                if (this.isOnGoing) {
                    let keysPressed = event.detail;
                    console.log('SitDownIdleLeft' + keysPressed);
                    KeyPressedUtil.withNoKey(keysPressed, () => this.player.setState(states.IDLE_LEFT));
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.SITDOWN_LEFT), keys.KEY_DOWN, keys.KEY_LEFT)
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.SITDOWN_RIGHT), keys.KEY_DOWN, keys.KEY_RIGHT)
                }
            }
        )
    }

    enter() {
        super.enter();
        this.player.velocity.x = 0;
    }
}

