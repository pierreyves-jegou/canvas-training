export class KeyPressedUtil {

    static withNoKey(keys, callback){
        if(keys.length === 0){
            console.log("yep")
            callback()
        }
    }

    static withExactlyKeys(keys, callback, values){
        const keyValues = [];
        for(let i=2; i < arguments.length; i++){
            keyValues.push(arguments[i]);
        }

        const checker = (arr, target) => target.every(v => arr.includes(v));
        if(checker(keys, keyValues)){
            callback();
        }
    }

}
