import {IncrementUtil} from "../utils/IncrementUtil";

export const states = {
    IDLE_RIGHT: 0,
    IDLE_LEFT: 1,
    RUNNING_RIGHT: 2,
    RUNNING_LEFT: 3,
    JUMPING_RIGHT: 4,
    JUMPING_LEFT: 5,
    SITDOWN_RIGHT: 6,
    SITDOWN_LEFT: 7,
    SITDOWN_IDLE_RIGHT: 8,
    SITDOWN_IDLE_LEFT: 9
}


export class PlayerMovementMultiImage {
    constructor(player, isOnGoing, spriteHeight, maxSprite) {
        this.isOnGoing = isOnGoing;
        this.slowDownRatio = 0;
        this.player = player;
        this.sprite = {
            currentSprite: 0,
            maxSprite,
            spriteHeight
        };
    }


    enter() {
        this.sprite.currentSprite = 0;
    }

    update() {
        if (this.slowDownRatio === 3) {
            this.sprite.currentSprite = IncrementUtil.increaseRolling(this.sprite.currentSprite, 1, this.sprite.maxSprite, 0);
            this.slowDownRatio = 0;
        } else {
            this.slowDownRatio++;
        }
    }

}
