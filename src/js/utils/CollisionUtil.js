export class CollisionUtil {
    
    static isTouching(targetObject, otherObject){
        let touchInX, touchInY = false;
        // Check X position
        if(targetObject.getRightPosition() >= otherObject.getLeftPosition() && targetObject.getRightPosition() <= otherObject.getRightPosition()){
            touchInX = true;
        }
        if(targetObject.getLeftPosition() >= otherObject.getLeftPosition() && targetObject.getLeftPosition() <= otherObject.getRightPosition()){
            touchInX = true;
        }

        // Check Y position
        if(targetObject.getTopPosition() >= otherObject.getTopPosition() && targetObject.getTopPosition() <= otherObject.getBottomPosition()){
            touchInY = true;
        }

        if(targetObject.getBottomPosition() >= otherObject.getTopPosition() && targetObject.getBottomPosition() <= otherObject.getBottomPosition()){
            touchInY = true;
        }

        if(touchInX && touchInY){
            console.log("TOUCHE!!!!!!!!!!!!!!!!!!!!!!")
        }
        return touchInX && touchInY;
    }
    
}
