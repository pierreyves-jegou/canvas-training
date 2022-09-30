import {PlayerMovementMultiImage, states} from "../PlayerMovment";

import {keys} from "../../KeyPressedListener";

export class IdleMoveRight extends PlayerMovementMultiImage {
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 2,9);
        this.handleInput();
    }

    handleInput() {
        window.addEventListener('KeyPressed', (event) => {
                if (this.isOnGoing) {
                    let keysPressed = event.detail;
                    console.log('IdleMouvRight' + keysPressed);
                    if (keysPressed.indexOf(keys.KEY_RIGHT) !== -1 && keysPressed.length === 1) {
                        this.player.setState(states.RUNNING_RIGHT);
                    }
                    if (keysPressed.indexOf(keys.KEY_LEFT) !== -1 && keysPressed.length === 1) {
                        this.player.setState(states.RUNNING_LEFT);
                    }
                    if (keysPressed.indexOf(keys.KEY_UP) !== -1 && keysPressed.length === 1) {
                        this.player.setState(states.JUMPING_RIGHT)
                    }
                    if (keysPressed.indexOf(keys.KEY_DOWN) !== -1 && keysPressed.length === 1) {
                        this.player.setState(states.SITDOWN_IDLE_RIGHT)
                    }
                }
            }
        )
    }

    enter() {
        super.enter();
        this.player.velocity.x = 0;
    }

}
