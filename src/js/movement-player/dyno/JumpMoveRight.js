import {PlayerMovementMultiImage, states} from "../PlayerMovment";
import {KeyPressedUtil} from "../../utils/KeyPressedUtil";
import {keys} from "../../KeyPressedListener";
import {DynoConstant} from "./DynoConstant";

export class JumpMoveRight extends PlayerMovementMultiImage {
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 4, 11);
        this.handleInput();
        this.framesJumping = 0;
    }

    handleInput() {
        window.addEventListener('KeyPressed', (event) => {
                if (this.isOnGoing) {
                    let keysPressed = event.detail;
                    console.log('JumpMoveRight' + keysPressed);
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => {
                            console.log('while jumping : ' + this.player.velocity.x)
                            if (this.player.velocity.x <= 0) {
                                this.player.velocity.x = DynoConstant.jumpWithoutVelocityMaxVelocity;
                            }
                        },
                        keys.KEY_RIGHT);
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.JUMPING_LEFT), keys.KEY_LEFT)
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.JUMPING_RIGHT), keys.KEY_LEFT, keys.KEY_UP)
                }
            }
        )
    }

    update() {
        super.update();
        if (this.framesJumping > 3) {
            if (this.player.onGround()) {
                this.player.setState(states.IDLE_RIGHT);
            }
        }
        this.framesJumping++;
    }

    enter() {
        super.enter();
        this.framesJumping = 0;
        if (this.player.onGround()) {
            this.player.velocity.y = -35;
        }
    }
}

