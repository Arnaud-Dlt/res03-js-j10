class Enquete
{
    #intro;
    #question;
    #image;
    
    constructor(intro, question, image)
    {
        this.#intro = intro;
        this.#question = question;
        this.#image = image;
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
    
    
}

export {Enquete};