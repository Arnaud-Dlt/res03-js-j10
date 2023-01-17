import { GameTest } from "./gametest.js";
import { Scenes } from "./scenes.js";
import { ScenesTest } from "./scenestest.js";


class Game
{
    
    #scene;
    
    
    constructor(scene)
    {
        this.#scene = [];
    }
    
    get scene()
    {
        return this.#scene;
    }
    
    set scene(scene)
    {
        this.#scene = scene;
    }
    
    
}

export {Game};