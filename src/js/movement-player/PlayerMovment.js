import {IncrementUtil} from "../utils/IncrementUtil";

export class PlayerMovementMultiImage {
    constructor(isOnGoing, maxSplit) {
        this.isOnGoing = isOnGoing;
        this.currentSplit = 0;
        this.maxSplit = maxSplit;
        this.imgRolling = [];
    }

    enable(){
        this.isOnGoing = true;
        this.currentSplit = 0;
    }

    disable(){
        this.isOnGoing = true;
        this.currentSplit = 0;
    }

    currentMovement(){
        if(this.isOnGoing){
            return this.imgRolling[this.currentSplit];
        }
    }

    nextMovement(){
        this.currentSplit = IncrementUtil.increaseRolling(this.currentSplit, 1, this.maxSplit, 0);
    }
}
