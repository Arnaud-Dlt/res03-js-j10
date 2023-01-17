import { Game } from "./game.js";

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
        
        this.#test1 = new Game(scene);
        
        console.log(this.#test1.scene);
        
        this.#test1 = ["Scene 32"];
        
        console.log(this.#test1.scene);
    }
    
}

export {GameTest};