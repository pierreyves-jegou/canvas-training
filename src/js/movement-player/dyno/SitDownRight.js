import {PlayerMovementMultiImage, states} from "../PlayerMovment";

import Jump1 from '../../../image/dyno_sprit/Jump_1.png'
import Jump2 from '../../../image/dyno_sprit/Jump_2.png'
import Jump3 from '../../../image/dyno_sprit/Jump_3.png'
import Jump4 from '../../../image/dyno_sprit/Jump_4.png'
import Jump5 from '../../../image/dyno_sprit/Jump_5.png'
import Jump6 from '../../../image/dyno_sprit/Jump_6.png'
import Jump7 from '../../../image/dyno_sprit/Jump_7.png'
import Jump8 from '../../../image/dyno_sprit/Jump_8.png'
import Jump9 from '../../../image/dyno_sprit/Jump_9.png'
import Jump10 from '../../../image/dyno_sprit/Jump_10.png'
import Jump11 from '../../../image/dyno_sprit/Jump_11.png'
import Jump12 from '../../../image/dyno_sprit/Jump_12.png'


import {ImageSource} from "../../utils/ImageSource";
import {keys} from "../../KeyPressedListener";
import {KeyPressedUtil} from "../../utils/KeyPressedUtil";

export class SitDownRight extends PlayerMovementMultiImage{
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 0, 4);
        this.handleInput();
    }

    handleInput() {
        window.addEventListener('KeyPressed', (event) => {
                if (this.isOnGoing) {
                    let keysPressed = event.detail;
                    console.log('SitDownRight' + keysPressed);
                    KeyPressedUtil.withNoKey(keysPressed, () => this.player.setState(states.IDLE_RIGHT));
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.SITDOWN_IDLE_RIGHT), keys.KEY_DOWN)
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.RUNNING_RIGHT), keys.KEY_RIGHT)
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.RUNNING_LEFT), keys.KEY_LEFT)
                }
            }
        )
    }

    enter() {
        super.enter();
        this.player.velocity.x = 3
    }
}

