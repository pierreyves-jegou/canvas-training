import {PlayerMovementMultiImage, states} from "../PlayerMovment";

import run1 from '../../../image/dyno_sprit/Run_1.png'
import run2 from '../../../image/dyno_sprit/Run_2.png'
import run3 from '../../../image/dyno_sprit/Run_3.png'
import run4 from '../../../image/dyno_sprit/Run_4.png'
import run5 from '../../../image/dyno_sprit/Run_5.png'
import run6 from '../../../image/dyno_sprit/Run_6.png'
import run7 from '../../../image/dyno_sprit/Run_7.png'
import run8 from '../../../image/dyno_sprit/Run_8.png'
import {ImageSource} from "../../utils/ImageSource";
import {keys} from "../../KeyPressedListener";
import {DynoConstant} from "./DynoConstant";

export class RunMoveRight extends PlayerMovementMultiImage {
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 6, 7);
        this.handleInput();
    }

    handleInput() {
        window.addEventListener('KeyPressed', (event) => {
                if (this.isOnGoing) {
                    let keysPressed = event.detail;
                    console.log('RunMoveRight' + keysPressed);
                    if (keysPressed.length === 0) {
                        this.player.setState(states.IDLE_RIGHT);
                    }
                    if (keysPressed.indexOf(keys.KEY_UP) !== -1) {
                        this.player.setState(states.JUMPING_RIGHT)
                    }
                }
            }
        )
    }

    enter() {
        super.enter();
        this.player.velocity.x = DynoConstant.runningVelocityX;
    }
}
