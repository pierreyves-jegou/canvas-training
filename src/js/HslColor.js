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
            this.h = this.#increaseRolling(this.h, increment, 360);
        }else{
            this.h = this.#increase(this.h, increment, 360);
        }
    }

    decreaseH(decrement, rolling = false){
        if(rolling){
            this.h = HslColor.#decreaseRolling(this.h, decrement, 360);
        }else{
            this.h = HslColor.#decrease(this.h, decrement);
        }
    }

    increaseS(increment, rolling = false){
        if(rolling){
            this.s = this.#increaseRolling(this.s, increment, 100);
        }else{
            this.s = this.#increase(this.s, increment, 100);
        }
    }

    decreaseS(decrement, rolling = false){
        if(rolling){
            this.s = HslColor.#decreaseRolling(this.s, decrement, 100);
        }else{
            this.s = HslColor.#decrease(this.s, decrement);
        }
    }

    increaseL(increment, rolling = false){
        if(rolling){
            this.l = this.#increaseRolling(this.l, increment, 100);
        }else{
            this.l = this.#increase(this.l, increment, 100);
        }
    }

    decreaseL(decrement, rolling = false){
        if(rolling){
            this.l = HslColor.#decreaseRolling(this.l, decrement, 100);
        }else{
            this.l = HslColor.#decrease(this.l, decrement);
        }
    }


    static #decrease(currentValue, decrement, minValue = 0){
        if(currentValue - decrement < minValue){
            return currentValue - decrement;
        }
        return minValue;
    }

    static #decreaseRolling(currentValue, decrement, maxValue, minValue = 0){
        if(decrement >= maxValue - minValue){
            throw new Error('The decrement value is bigger than maxValue - minValue')
        }

        if(currentValue - decrement <= minValue){
            return currentValue - decrement;
        }
        return maxValue + currentValue - decrement;
    }

    static #increase(currentValue, increment, maxValue, minValue = 0){
        if(currentValue + increment <= maxValue){
            return currentValue + increment;
        }
        return minValue;
    }

    static #increaseRolling(currentValue, increment, maxValue, minValue = 0){
        if(increment >= maxValue - minValue){
            throw new Error('The increment value is bigger than maxValue - minValue')
        }
        if(currentValue + increment <= maxValue){
            return currentValue + increment;
        }
        if(currentValue + increment - maxValue < minValue){
            return minValue;
        }
        return currentValue + increment - maxValue;
    }
}
