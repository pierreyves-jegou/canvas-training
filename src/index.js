import HslColor from "./js/HslColor";
import {Player} from "./js/Player";
import {Plateform} from "./js/Plateform";
import {game} from "./js/Game"
import {KeyPressedListener} from "./js/KeyPressedListener";
import {DynoConstant} from "./js/movement-player/dyno/DynoConstant";

const player = new Player(400, game.height, game)
new KeyPressedListener();

const platerform = new Plateform(800, 500, game.ctx);

function animate(){
    game.ctx.clearRect(0, 0, game.width, game.height);
    platerform.draw();
    player.draw();
    player.update();
    requestAnimationFrame(animate)
}

animate()
