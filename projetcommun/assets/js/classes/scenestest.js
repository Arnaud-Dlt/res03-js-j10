import { Scenes } from "./classes/scenes.js";

class SceneTest
{
    
    #test;
    
    constructor()
    {
        this.#test = null;
    }
    
    test()
    {
        let intro = "intro 1"
        let question = "Comment a t-il fait ?"
        let image = "../img/corps.jpg";
        let choix = [1];
        
        this.#test = new Scenes(intro, question, image, choix);
        
        console.log(intro);
        console.log(question);
        console.log(image);
        console.log(choix);
    }
}

export { SceneTest };