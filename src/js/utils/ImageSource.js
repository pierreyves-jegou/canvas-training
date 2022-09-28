import {DynoConstant} from "../movement-player/dyno/DynoConstant";

export class ImageSource {

    static createImage(source){
        const image = new Image(DynoConstant.dynoWidth, DynoConstant.dynoHeight);
        image.src = source;
        return image;
    }
}
