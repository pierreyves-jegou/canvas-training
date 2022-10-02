import {DynoPlayer} from "./DynoPlayer"

export class DeadMove extends DynoPlayer{
    constructor(player, isOnGoing) {
        super(player, isOnGoing, 8, 0);
    }

    handleInput(activesKeys) {
        console.log('DeadMove' + activesKeys);
    }

    enter() {
        super.enter();
        this.player.objectMoving.velocity.x = 0
    }
}

