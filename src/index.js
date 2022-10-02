import {Player} from "./js/Player";
import {game} from "./js/Game"
import {KeyPressedListener} from "./js/KeyPressedListener";
import {Cactus} from "./js/Cactus";
import {Plateform} from "./js/Plateform";
import {CollisionUtil} from "./js/utils/CollisionUtil";
import {states} from "./js/movement-player/dyno/DynoPlayer";

window.debug = false;

const player = new Player(400, game.height, game)
new KeyPressedListener();

 const jumbables = [];
jumbables.push(new Plateform(800, 500, game))

const cactus = [
    new Cactus(game.width, game.height, game),
    new Cactus(game.width + 100, game.height, game),
    new Cactus(game.width + 700, game.height, game)
]

function animate(){
    game.ctx.clearRect(0, 0, game.width, game.height);
    jumbables.forEach(jumbable => {
         jumbable.draw();
         jumbable.update()
    })

    console.log("player.velocity.x: " + player.velocity.x + " game.velocity.x: " + game.velocity.x )

    cactus.forEach(c => {
        c.draw();
        c.update();
    });
    player.draw();
    player.update();
    cactus.forEach(c => {
        let touched = CollisionUtil.isTouching(player, c);
        if(touched){
            player.setState(states.DEAD)
        }
    })

    if(debug){
        game.ctx.beginPath();
        game.ctx.lineWidth = "1";
        game.ctx.strokeStyle = "blue";
        game.ctx.rect(game.scrollingInterval.left, game.height - 500, 1, 500);
        game.ctx.stroke();

        game.ctx.beginPath();
        game.ctx.lineWidth = "1";
        game.ctx.strokeStyle = "red";
        game.ctx.rect(game.scrollingInterval.right, game.height - 500, 1, 500);
        game.ctx.stroke();
    }

    requestAnimationFrame(animate)
}

animate()


// function highestJumpableObjectUnderUser(){
//     let jumbableUnderPlayer = jumbables.filter(j => {
//         if(!(j.position.x - j.width < player.position.x && j.position.x + j.width > player.getRightPosition())){
//             return false;
//         }
//         let diff = j.position.y - j.height - player.getBottomPosition();
//         if(Math.abs(diff) < 5){
//             return true;
//         }
//         return false;
//     }).sort((a, b) => {
//         if(a.height > b.height){
//             return -1
//         }
//         if(b.height > a.height){
//             return 1;
//         }
//         return 0;
//     });
//     if(jumbableUnderPlayer.length > 0){
//         return jumbableUnderPlayer[0];
//     }
//     return null;
// }
