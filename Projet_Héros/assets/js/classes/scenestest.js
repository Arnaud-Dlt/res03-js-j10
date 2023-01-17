import { Scenes } from "./scenes.js";

class ScenesTest
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
        let choix = ["lalala"];
        
        this.#test = new Scenes(intro, question, image, choix);
        
        console.log(intro);
        console.log(question);
        console.log(image);
        console.log(choix);
        
        this.#test.intro = "intro2";
        this.#test.question = "Il a fait comme ça?";
        this.#test.image = "../img/empreinte-digitale.png";
        this.#test.choix = ["bloublou"];
        
        console.log(this.#test.intro);
        console.log(this.#test.question);
        console.log(this.#test.image);
        console.log(this.#test.choix);
    }
}

export { ScenesTest };