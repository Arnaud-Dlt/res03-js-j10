class Enquete
{
    #intro;
    #question;
    #choix;
    #image;
    
    
    constructor()
    {
        this.#intro = [];
        this.#question = [];
        this.#image = [];
        this.#choix = [];
    }
    
    get intro ()
    {
        return this.#intro;
    }
    
    set intro (intro)
    {
        this.#intro = intro;
    }
    
    get question ()
    {
        return this.#question;
    }
    
    set question (question)
    {
        this.#question = question;
    }
    
    get image ()
    {
        return this.#image;
    }
    
    set image (image)
    {
        this.#image = image;
    }
    
    get choix ()
    {
        return this.#choix;
    }
    
    set choix (choix)
    {
        this.#choix = choix;
    }
}

export {Enquete};