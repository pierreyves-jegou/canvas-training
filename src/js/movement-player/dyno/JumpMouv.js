import {PlayerMovementMultiImage} from "../PlayerMovment";

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

export class JumpMouv extends PlayerMovementMultiImage{
    constructor(isOnGoing) {
        super(isOnGoing, 11);
        this.imgRolling.push(ImageSource.createImage(Jump1));
        this.imgRolling.push(ImageSource.createImage(Jump2));
        this.imgRolling.push(ImageSource.createImage(Jump3));
        this.imgRolling.push(ImageSource.createImage(Jump4));
        this.imgRolling.push(ImageSource.createImage(Jump5));
        this.imgRolling.push(ImageSource.createImage(Jump6));
        this.imgRolling.push(ImageSource.createImage(Jump7));
        this.imgRolling.push(ImageSource.createImage(Jump8));
        this.imgRolling.push(ImageSource.createImage(Jump9));
        this.imgRolling.push(ImageSource.createImage(Jump10));
        this.imgRolling.push(ImageSource.createImage(Jump11));
        this.imgRolling.push(ImageSource.createImage(Jump12));
    }
}

