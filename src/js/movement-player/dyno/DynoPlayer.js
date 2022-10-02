import {PlayerMovement} from "../PlayerMovment";

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
    SITDOWN_IDLE_LEFT: 9,
    DEAD: 10
}

export class DynoPlayer extends PlayerMovement{
    constructor(player,isOnGoing, spriteHeight, maxSprite) {
        super(player,isOnGoing, spriteHeight, maxSprite);
    }
}
