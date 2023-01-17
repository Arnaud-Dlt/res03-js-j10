import { dataInvestigation } from "../data/datagame.js";

class Scenes
{
    #id;
    #intro; 
    #question; 
    #image; 
    #choix; 
    
    constructor(id, intro, question, image, choix)
    {
        this.#id = id;
        this.#intro = intro;
        this.#question = question;
        this.#image = image;
        this.#choix = [];
    }
    
    get id()
    {
        return this.#id;
    }
    
    set id(id)
    {
        this.#id = id;
    }
    
    get intro()
    {
        
        return this.#intro;
    }
    
    set intro(intro)
    {
        this.#intro = intro;
    }
    
    get question()
    {
        return this.#question;
    }
    
    set question(question)
    {
        this.#question = question;
    }
    
    get image()
    {
        return this.#image;
    }
    
    set image(image)
    {
        this.#image = image;
    }
    
    get choix()
    {
        return this.#choix;
    }
    
    set choix(choix)
    {
        this.#choix = choix;
    }
    
    displayScene()
    {
        
    }
    
}

export { Scenes };