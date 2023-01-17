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
        let intro = document.getElementById("intro");
        let question = document.getElementById("question");
        let image = document.getElementById("image");
        let choix1 = document.getElementById("choix1"); 
        let choix2 = document.getElementById("choix2");
        let choix3 = document.getElementById("choix3");
        
        intro.textcontent = this.intro;
        question.textcontent = this.question;
    }
    
}

export { Scenes };