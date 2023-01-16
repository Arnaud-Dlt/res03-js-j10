import { GameTest } from "./classes/gametest.js";
import { Scenes } from "./classes/scenes.js";
import { ScenesTest } from "./classes/scenestest.js";


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
    
    displayScene()
    {
        
    }
}

export {Game};