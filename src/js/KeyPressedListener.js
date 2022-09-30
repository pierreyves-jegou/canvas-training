export const keys = {
    KEY_UP: "KEY_UP",
    KEY_RIGHT: "KEY_RIGHT",
    KEY_LEFT: "KEY_LEFT",
    KEY_DOWN: "KEY_DOWN"
}

export class KeyPressedListener {
    constructor() {
        this.activeKeys = [];
        this.#handleKeyUp()
        this.#handleKeyDown();
    }

    #addUniqToActiveKeys(key){
        if(this.activeKeys.indexOf(key) === -1){
            this.activeKeys.push(key);
            const event = new CustomEvent('KeyPressed', { detail : this.activeKeys });
            window.dispatchEvent(event);
        }
    }

    #removeToActiveKeys(key){
        const ind = this.activeKeys.indexOf(key);
        if(ind !== -1){
            this.activeKeys.splice(ind, 1);
            const event = new CustomEvent('KeyPressed', { detail : this.activeKeys });
            window.dispatchEvent(event);
        }
    }

    #handleKeyUp() {
        window.addEventListener('keyup', ({keyCode}) => {
            switch (keyCode) {
                case 39:
                    // RIGHT
                    this.#removeToActiveKeys(keys.KEY_RIGHT)
                    break;
                case 37:
                    this.#removeToActiveKeys(keys.KEY_LEFT)
                    break;
                case 38:
                    this.#removeToActiveKeys(keys.KEY_UP)
                    break;
                case 40:
                   this.#removeToActiveKeys(keys.KEY_DOWN)
                    break;
            }
        })
    }

    #handleKeyDown() {
        window.addEventListener('keydown', ({keyCode}) => {
            switch (keyCode) {
                case 39:
                    // RIGHT
                    this.#addUniqToActiveKeys(keys.KEY_RIGHT)
                    break;
                case 37:
                    this.#addUniqToActiveKeys(keys.KEY_LEFT)
                    break;
                case 38:
                    this.#addUniqToActiveKeys(keys.KEY_UP)
                    break;
                case 40:
                    this.#addUniqToActiveKeys(keys.KEY_DOWN)
                    break;
            }
        })
    }
}
