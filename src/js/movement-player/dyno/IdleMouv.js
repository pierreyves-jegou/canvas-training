import {PlayerMovementMultiImage} from "../PlayerMovment";

import Idle1 from '../../../image/dyno_sprit/Idle_1.png'
import Idle2 from '../../../image/dyno_sprit/Idle_2.png'
import Idle3 from '../../../image/dyno_sprit/Idle_3.png'
import Idle4 from '../../../image/dyno_sprit/Idle_4.png'
import Idle5 from '../../../image/dyno_sprit/Idle_5.png'
import Idle6 from '../../../image/dyno_sprit/Idle_6.png'
import Idle7 from '../../../image/dyno_sprit/Idle_7.png'
import Idle8 from '../../../image/dyno_sprit/Idle_8.png'
import Idle9 from '../../../image/dyno_sprit/Idle_9.png'
import Idle10 from '../../../image/dyno_sprit/Idle_10.png'
import {ImageSource} from "../../utils/ImageSource";

export class IdleMouv extends PlayerMovementMultiImage{
    constructor(isOnGoing) {
        super(isOnGoing, 9);
        this.imgRolling.push(ImageSource.createImage(Idle1));
        this.imgRolling.push(ImageSource.createImage(Idle2));
        this.imgRolling.push(ImageSource.createImage(Idle3));
        this.imgRolling.push(ImageSource.createImage(Idle4));
        this.imgRolling.push(ImageSource.createImage(Idle5));
        this.imgRolling.push(ImageSource.createImage(Idle6));
        this.imgRolling.push(ImageSource.createImage(Idle7));
        this.imgRolling.push(ImageSource.createImage(Idle8));
        this.imgRolling.push(ImageSource.createImage(Idle9));
        this.imgRolling.push(ImageSource.createImage(Idle10));
    }
}
