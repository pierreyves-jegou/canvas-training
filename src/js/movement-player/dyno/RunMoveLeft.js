import {PlayerMovementMultiImage, states} from "../PlayerMovment";

import run1 from '../../../image/dyno_sprit/Run_Left_1.png'
import run2 from '../../../image/dyno_sprit/Run_Left_2.png'
import run3 from '../../../image/dyno_sprit/Run_Left_3.png'
import run4 from '../../../image/dyno_sprit/Run_Left_4.png'
import run5 from '../../../image/dyno_sprit/Run_Left_5.png'
import run6 from '../../../image/dyno_sprit/Run_Left_6.png'
import run7 from '../../../image/dyno_sprit/Run_Left_7.png'
import run8 from '../../../image/dyno_sprit/Run_Left_8.png'
import {ImageSource} from "../../utils/ImageSource";
import {keys} from "../../KeyPressedListener";
import {DynoConstant} from "./DynoConstant";
import {KeyPressedUtil} from "../../utils/KeyPressedUtil";

export class RunMoveLeft extends PlayerMovementMultiImage {
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 7, 7);
        this.handleInput();
    }


    handleInput() {
        window.addEventListener('KeyPressed', (event) => {
                if (this.isOnGoing) {
                    let keysPressed = event.detail;
                    console.log('RunMoveLeft' + keysPressed);
                    KeyPressedUtil.withNoKey(keysPressed, () => this.player.setState(states.IDLE_LEFT));
                    KeyPressedUtil.withExactlyKeys(keysPressed, () => this.player.setState(states.JUMPING_LEFT), keys.KEY_UP)
                }
            }
        )
    }

    enter() {
        super.enter();
        this.player.velocity.x = - DynoConstant.runningVelocityX;
    }

}
