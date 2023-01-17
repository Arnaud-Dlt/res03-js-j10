import { Game } from "./classes/game.js";

class GameTest
{
    #test1;
    
    constructor()
    {
        this.#test1 = null;
    }
    
    test1()
    {
        let scene = ["Scene 1"];
        
        this.#scene = new Game(scene);
        
        console.log(this.#scene);
    }
    
}

export {GameTest};