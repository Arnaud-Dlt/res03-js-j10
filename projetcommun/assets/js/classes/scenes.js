import { dataInvestigation } from "../data/datagame.js";

class Scenes
{
    
    #id;
    #intro; 
    #question; 
    #image; 
    #choix1; 
    #choix2;
    #choix3;
    #destination1;
    #destination2;
    
    constructor(id, intro, question, image, choix)
    {
        this.#id = id;
        this.#intro = dataInvestigation[id].intro;
        this.#question = dataInvestigation[id].question;
        this.#image = dataInvestigation[id].image;
        this.#choix1 = dataInvestigation[id].choix[0].choix1;
        this.#choix2 = dataInvestigation[id].choix[1].choix2;
        this.#choix3 = dataInvestigation[id].choix[2].choix3;
        this.#destination1 = dataInvestigation[id].choix[0].destination1;
        this.#destination2 = dataInvestigation[id].choix[1].destination2;
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
    
    get choix1()
    {
        
        return this.#choix1;
    }
    
    set choix1(choix1)
    {
        this.#choix1 = choix1;
    }
    
    get choix2()
    {
        
        return this.#choix2;
    }
    
    set choix2(choix2)
    {
        this.#choix2 = choix2;
    }
    
    get choix3()
    {
        
        return this.#choix3;
    }
    
    set choix3(choix3)
    {
        this.#choix3 = choix3;
    }
    
}

export { Scenes };