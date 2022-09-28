import HslColor from "./js/HslColor";
import {Player} from "./js/Player";
import {Plateform} from "./js/Plateform";


import {game} from "./js/Game"
import {KeyPressedListener} from "./js/KeyPressedListener";

const player = new Player(400, game.height, game)
const keyPressedListener = new KeyPressedListener();

window.addEventListener('KeyPressed' , (event) => {
    console.log(event);
    console.log(event.detail);
    }
)

window.addEventListener('keyup', ({keyCode}) => {
    switch (keyCode) {
        case 39:
            // RIGHT
            player.isGoingRigth.isOnGoing = false;
            break;
        case 37:
            player.isGoingLeft.isOnGoing = false;
            break;
        case 38:
            // console.log(player.getBottomYPosition())
            // console.log(player.getTopYPosition())
            // console.log(canvas.height)
            // player.goUp()
            break;
        case 40:
            // DOWN
            break;
    }
})

window.addEventListener('keydown', ({keyCode}) => {
    console.log(keyCode)
    switch (keyCode) {
        case 39:
            // RIGHT
            player.isGoingRigth.isOnGoing = true;
            break;
        case 37:
            player.isGoingLeft.isOnGoing = true;
            break;
        case 38:
            console.log(player.getBottomPosition())
            console.log(player.getTopPosition())
            console.log(game.height)
            player.goUp()
            break;
        case 40:
            // DOWN
            break;
    }
})



const platerform = new Plateform(800, 500, game.ctx);

function animate(){
    game.ctx.clearRect(0, 0, game.width, game.height);
    platerform.draw();
    player.draw();
    player.update();
    requestAnimationFrame(animate)
}

animate()
