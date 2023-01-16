class Enquete
{
    #intro = "";
    #question = "";
    #image = "";
    #choix
    [
        {
            text: "",
            destination{}
        },
        {
            text: "",
            destination{}
        },
        {
            text:"",
            destination{}
        }
    ];
    
    constructor(intro, question, image, choix)
    {
        this.#intro = intro;
        this.#question = question;
        this.#image = image;
        this.#choix = [];
    }
    
    get intro ()
    {
        return this.#intro;
    }
    
    get question ()
    {
        return this.#question;
    }
    
    get image ()
    {
        return this.#image;
    }
    
    get choix()
    {
        return this.#choix;
    }
    
    intros()
    {
        
    }
    
    addIntro()
    {
        this.#intro.push()
    }
    
    removeIntro()
    {
        
    }
    
    addQuestion()
    {
        
    }
    
    removeQuestion()
    {
        
    }
    
    addImage()
    {
        
    }
    
    removeImage()
    {
        
    }
    
    addChoix()
    {
        
    }
}

export {Enquete};