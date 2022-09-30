import {PlayerMovementMultiImage} from "../PlayerMovment";

import Idle1 from '../../../image/dyno_sprit/Idle_Left_1.png'
import Idle2 from '../../../image/dyno_sprit/Idle_Left_2.png'
import Idle3 from '../../../image/dyno_sprit/Idle_Left_3.png'
import Idle4 from '../../../image/dyno_sprit/Idle_Left_4.png'
import Idle5 from '../../../image/dyno_sprit/Idle_Left_5.png'
import Idle6 from '../../../image/dyno_sprit/Idle_Left_6.png'
import Idle7 from '../../../image/dyno_sprit/Idle_Left_7.png'
import Idle8 from '../../../image/dyno_sprit/Idle_Left_8.png'
import Idle9 from '../../../image/dyno_sprit/Idle_Left_9.png'
import Idle10 from '../../../image/dyno_sprit/Idle_Left_10.png'
import {ImageSource} from "../../utils/ImageSource";
import {states} from "../PlayerMovment"

import {keys} from "../../KeyPressedListener";
import {KeyPressedUtil} from "../../utils/KeyPressedUtil";

export class IdleMoveLeft extends PlayerMovementMultiImage {
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 3, 9);
        this.handleInput();
    }

    handleInput() {
        window.addEventListener('KeyPressed', (event) => {
                if (this.isOnGoing) {
                    let keysPressed = event.detail;
                    console.log('IdleMouvLeft' + keysPressed);
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.RUNNING_RIGHT), keys.KEY_RIGHT)
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.RUNNING_LEFT), keys.KEY_LEFT)
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.SITDOWN_LEFT), keys.KEY_DOWN)
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.JUMPING_LEFT), keys.KEY_UP)
                }
            }
        )
    }

    enter() {
        super.enter();
        this.player.velocity.x = 0;
    }

}
