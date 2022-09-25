import {PlayerMovementMultiImage} from "../PlayerMovment";

import run1 from '../../../image/dyno_sprit/Run_1.png'
import run2 from '../../../image/dyno_sprit/Run_2.png'
import run3 from '../../../image/dyno_sprit/Run_3.png'
import run4 from '../../../image/dyno_sprit/Run_4.png'
import run5 from '../../../image/dyno_sprit/Run_5.png'
import run6 from '../../../image/dyno_sprit/Run_6.png'
import run7 from '../../../image/dyno_sprit/Run_7.png'
import run8 from '../../../image/dyno_sprit/Run_8.png'
import {ImageSource} from "../../utils/ImageSource";

export class RunRightMouv extends PlayerMovementMultiImage{
    constructor(isOnGoing) {
        super(isOnGoing, 7);
        this.imgRolling.push(ImageSource.createImage(run1));
        this.imgRolling.push(ImageSource.createImage(run2));
        this.imgRolling.push(ImageSource.createImage(run3));
        this.imgRolling.push(ImageSource.createImage(run4));
        this.imgRolling.push(ImageSource.createImage(run5));
        this.imgRolling.push(ImageSource.createImage(run6));
        this.imgRolling.push(ImageSource.createImage(run7));
        this.imgRolling.push(ImageSource.createImage(run8));
    }
}
