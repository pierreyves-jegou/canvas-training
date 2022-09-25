import {IncrementUtil} from "./utils/IncrementUtil";

export default class HslColor {
    constructor(h,s,l) {
        this.h = h;
        this.s = s;
        this.l = l;
    }

    toColor(){
        return 'hsl(' + this.h + ',' + this.s +'%,'+ this.l +'%)';
    }
    increaseH(increment, rolling = false){
        if(rolling){
            this.h = IncrementUtil.increaseRolling(this.h, increment, 360);
        }else{
            this.h = IncrementUtil.increase(this.h, increment, 360);
        }
    }

    decreaseH(decrement, rolling = false){
        if(rolling){
            this.h = IncrementUtil.decreaseRolling(this.h, decrement, 360);
        }else{
            this.h = IncrementUtil.decrease(this.h, decrement);
        }
    }

    increaseS(increment, rolling = false){
        if(rolling){
            this.s = IncrementUtil.increaseRolling(this.s, increment, 100);
        }else{
            this.s = IncrementUtil.increase(this.s, increment, 100);
        }
    }

    decreaseS(decrement, rolling = false){
        if(rolling){
            this.s = IncrementUtil.decreaseRolling(this.s, decrement, 100);
        }else{
            this.s = IncrementUtil.decrease(this.s, decrement);
        }
    }

    increaseL(increment, rolling = false){
        if(rolling){
            this.l = IncrementUtil.increaseRolling(this.l, increment, 100);
        }else{
            this.l = IncrementUtil.increase(this.l, increment, 100);
        }
    }

    decreaseL(decrement, rolling = false){
        if(rolling){
            this.l = IncrementUtil.decreaseRolling(this.l, decrement, 100);
        }else{
            this.l = IncrementUtil.decrease(this.l, decrement);
        }
    }



}
