import {IncrementUtil} from "../utils/IncrementUtil";

export class PlayerMovement {
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
        if (this.slowDownRatio === 0) {
            this.sprite.currentSprite = IncrementUtil.increaseRolling(this.sprite.currentSprite, 1, this.sprite.maxSprite, 0);
            this.slowDownRatio = 0;
        } else {
            this.slowDownRatio++;
        }
    }

}
