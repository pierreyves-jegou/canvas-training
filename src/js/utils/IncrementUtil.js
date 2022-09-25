export class IncrementUtil {

    static decrease(currentValue, decrement, minValue = 0){
        if(currentValue - decrement < minValue){
            return currentValue - decrement;
        }
        return minValue;
    }

    static decreaseRolling(currentValue, decrement, maxValue, minValue = 0){
        if(decrement >= maxValue - minValue){
            throw new Error('The decrement value is bigger than maxValue - minValue')
        }

        if(currentValue - decrement <= minValue){
            return currentValue - decrement;
        }
        return maxValue + currentValue - decrement;
    }

    static increase(currentValue, increment, maxValue, minValue = 0){
        if(currentValue + increment <= maxValue){
            return currentValue + increment;
        }
        return minValue;
    }

    static increaseRolling(currentValue, increment, maxValue, minValue = 0){
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
