import HslColor from "./js/HslColor";
import {Player} from "./js/Player";

const canvas = document.getElementById('my-canva');
canvas.width = window.innerWidth-10;
canvas.height = window.innerHeight-10;
const ctx = canvas.getContext("2d");

const player = new Player(400, canvas.height, ctx, canvas.width, canvas.height)

const mousePosition = {
    posX : null,
    posY : null
}

window.addEventListener('keydown', ({keyCode}) => {
    console.log(keyCode)
    switch(keyCode){
        case 39:
            // RIGHT
            player.isGoingRigth.isOnGoing = true;
            break;
        case 37:
            player.isGoingLeft.isOnGoing = true;
            break;
        case 38:
            console.log(player.getBottomYPosition())
            console.log(player.getTopYPosition())
            console.log(canvas.height)
            player.goUp()
            break;
        case 40:
            // DOWN
            break;
    }
})

window.addEventListener('keyup', ({keyCode}) => {
    switch(keyCode){
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


function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.draw();
    player.update();
    requestAnimationFrame(animate)
}



animate()
